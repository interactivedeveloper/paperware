import classNames from 'classnames';
import { gsap } from 'gsap';
import { Fragment, useEffect, useRef } from 'react';

import styles from './HistoryBox.module.scss';

interface Props {
  year: number;
  texts: string[];
}

const HistoryBox = ({ year, texts }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const onResize = () => {
      if (tlRef.current) {
        tlRef.current.kill();
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          once: true,
        },
      });
      tl.to(
        ref.current!.querySelector(`.${styles["history-text"]}`),
        {
          x: 0,
          opacity: 1,
          duration: 1,
        },
        0
      );

      const historyYearEl = ref.current!.querySelector(
        `.${styles["history-year-wrap"]}`
      );
      tl.fromTo(
        historyYearEl,
        {
          y: historyYearEl!.clientHeight / 2 - 14,
          opacity: 0,
        },
        {
          y: historyYearEl!.clientHeight / 2 - 34,
          opacity: 1,
          duration: 1,
        },
        0
      );

      tlRef.current = tl;
    };

    window.addEventListener("resize", () => {
      onResize();
    });
    onResize();
  }, []);

  return (
    <div
      ref={ref}
      className={classNames(
        styles["history-box"],
        styles[`length-${texts.length}`]
      )}
    >
      <p className={styles["history-text"]}>
        {texts.map((t, i) => (
          <Fragment key={t}>
            {t}
            {i !== texts.length - 1 && <br />}
          </Fragment>
        ))}
      </p>
      <div className={styles["history-year-wrap"]}>
        <p className={styles["history-year"]}>{year}</p>
      </div>
    </div>
  );
};

export default HistoryBox;
