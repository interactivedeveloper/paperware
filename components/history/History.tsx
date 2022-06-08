import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

import useRouteScrolling from 'hooks/useRouteScrolling';
import HistoryBox from './components/HistoryBox';
import styles from './History.module.scss';

const histories = [
  {
    year: 2022,
    texts: [
      "22.09   PAPYRUS v2.0 출시 (예정)",
      "22.05   기술창업기업 인증 (브라이트클럽)",
      "22.03   중진공 주관 청년창업사관학교 선정",
    ],
  },
  {
    year: 2021,
    texts: [
      "21.10   특허권 등록 (제10-2322142호)",
      "21.10   BEPA 기술창업 우수기업 선정",
    ],
  },
  {
    year: 2020,
    texts: [
      "20.09   Seed Round 2억원 유치",
      "20.07   (주)페이퍼웨어 설립 ",
      "20.06   중기부 주관 예비창업자패키지 선정",
    ],
  },
];

const History = () => {
  const ref = useRef<HTMLElement>(null);
  useRouteScrolling({ ref, route: "history" });

  useEffect(() => {
    const h3 = ref.current!.querySelector("h3");
    gsap.to(h3, {
      scrollTrigger: {
        trigger: h3,
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "0.25,0.1,0.25,1",
    });
  }, []);

  return (
    <section ref={ref} id="history" className={styles["history"]}>
      <h3>History</h3>
      <div>
        {histories.map((h) => (
          <HistoryBox key={h.year} {...h} />
        ))}
      </div>
    </section>
  );
};

export default History;
