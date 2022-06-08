import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

import styles from './PartnersText.module.scss';

gsap.registerEffect({
  name: "counter",
  extendTimeline: true,
  defaults: {
    end: 0,
    duration: 1,
    increment: 1,
  },
  effect: (targets: HTMLElement[], config: gsap.TweenVars) => {
    const tl = gsap.timeline();
    const num = targets[0].innerText.replace(/,/g, "");
    targets[0].innerText = num;

    tl.to(
      targets,
      {
        duration: config.duration,
        innerText: config.end,
        modifiers: {
          innerText(innerText) {
            return gsap.utils
              .snap(config.increment, innerText)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          },
        },
        ease: config.ease,
      },
      0
    );

    return tl;
  },
});

const counters = [4318, 20218, 14];

const PartnersText = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        once: true,
      },
    });

    counters.forEach((val, i) => {
      tl.counter(
        ref.current!.querySelector(`li:nth-child(${i + 1}) strong`),
        {
          duration: 1 + 0.5 * i,
          end: val,
        },
        0
      );
    });
  }, []);

  return (
    <div ref={ref} className={styles["txt-box"]}>
      <ul>
        <li>
          <span>기업 고객사</span>
          <strong>0</strong>
        </li>
        <li>
          <span>서비스 이용 회원</span>
          <strong>0</strong>
        </li>
        <li>
          <span>협력 파트너</span>
          <strong>0</strong>
        </li>
      </ul>
      <p>2022년 05월 기준</p>
    </div>
  );
};

export default PartnersText;
