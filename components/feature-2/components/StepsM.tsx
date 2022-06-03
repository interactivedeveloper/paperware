import { gsap } from "gsap";
import { useEffect, useState } from "react";

import StepsMSvg from "svgs/steps_m.svg";
import Feature2Item from "./Feature2Item";
import styles from "../Feature2.module.scss";

const StepsM = ({
  items,
}: {
  items: { title: string; description: string }[];
}) => {
  const [animationEnded, setAnimationEnded] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.querySelector(`.${styles["feature-2"]}`),
        start: "25% bottom",
      },
    });
    for (let i = 1; i <= 11; i++) {
      tl.fromTo(
        `#step-m-${i}`,
        { opacity: 0, y: 100 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6 },
        "<+=0.1"
      );
    }
    tl.call(() => setAnimationEnded(true));
  }, []);

  return (
    <>
      <StepsMSvg />
      {items.map((item, index) => (
        <Feature2Item
          key={item.title}
          {...item}
          index={index}
          active={animationEnded}
          isSmallDevice
        />
      ))}
    </>
  );
};

export default StepsM;
