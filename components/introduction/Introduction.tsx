import { useRef } from 'react';

import useRouteScrolling from 'hooks/useRouteScrolling';
import styles from './Introduction.module.scss';

const Introduction = () => {
  const ref = useRef<HTMLElement>(null);
  useRouteScrolling({ ref, route: "features" });

  return (
    <section id="features" ref={ref} className={styles["introduction"]}>
      <p>
        전화 · 문자 · 팩스를 이용한 기업 운영은 그만.
        <br />
        거래처 재고 조회부터 생산 현황 관리 그리고 마감까지 한번에,
        <br />
        제지 산업 공급망을 실시간으로 관리하세요.
      </p>
      <p>
        전화 · 문자 · 팩스는 이제 그만.
        <br />
        발주부터 마감까지 한번에,
        <br />
        제지 유통 데이터를
        <br />
        실시간으로 관리하세요.
      </p>
    </section>
  );
};

export default Introduction;
