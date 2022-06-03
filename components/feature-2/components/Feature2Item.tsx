import "react-popper-tooltip/dist/styles.css";

import classNames from "classnames";
import { memo, useEffect } from "react";
import { usePopperTooltip } from "react-popper-tooltip";

import styles from "./Feature2Item.module.scss";

interface Props {
  title: string;
  description: string;
  active: boolean;
  index: number;
  isSmallDevice?: boolean;
}

const Feature2Item = ({
  title,
  description,
  active,
  index,
  isSmallDevice,
}: Props) => {
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } =
    usePopperTooltip({
      offset: [0, 30],
    });

  useEffect(() => {
    setTriggerRef(
      document.querySelector(
        `#step-${isSmallDevice ? "m-" : ""}${index + 1}-container`
      ) as HTMLElement
    );
  }, []);

  return (
    <>
      {active && visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({
            className: classNames(
              ["tooltip-container"],
              styles["tooltip-container"]
            ),
          })}
        >
          <div>
            <h3 className={styles["tooltip-title"]}>{title}</h3>
            <p className={styles["tooltip-description"]}>{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Feature2Item);
