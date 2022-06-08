import { gsap } from 'gsap';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import StepsSvg from 'svgs/steps.svg';

import { animationEndedState } from 'store/store';
import styles from '../Feature2.module.scss';
import Feature2Item from './Feature2Item';

const Steps = ({
  items,
}: {
  items: { title: string; description: string }[];
}) => {
  const [animationEnded, setAnimationEnded] =
    useRecoilState(animationEndedState);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.querySelector(`.${styles["feature-2"]}`),
        start: "25% bottom",
      },
    });
    for (let i = 1; i <= 11; i++) {
      tl.fromTo(
        `#step-${i}`,
        { opacity: 0, y: 100 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6 },
        "<+=0.1"
      );
    }
    tl.call(() => setAnimationEnded(true));
  }, []);

  return (
    <>
      <StepsSvg />
      {items.map((item, index) => (
        <Feature2Item
          key={item.title}
          {...item}
          index={index}
          active={animationEnded}
        />
      ))}
    </>
  );
};

export default Steps;
