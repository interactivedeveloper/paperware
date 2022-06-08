import dynamic from 'next/dynamic';
import { Suspense, useEffect, useRef, useState } from 'react';

import styles from './Feature2.module.scss';

// svg image 레이지 로드
const Steps = dynamic(() => import("./components/Steps"), { suspense: true });
const StepsM = dynamic(() => import("./components/StepsM"), { suspense: true });

const items = [
  {
    title: "1. 구매자",
    description:
      "구매자는 온라인으로 기업의 재고 조회 및 주문을 등록합니다. 등록된 발주 정보는 구매자의 카카오톡으로 전송되며, 이 시점부터 작업 현황을 실시간으로 조회할 수 있습니다.",
  },
  {
    title: "2. 수주담당자",
    description:
      "유사 규격 지원, 작업 정보를 작성하여 현장으로 매출 정보를 전달합니다. 매출은 상태값으로 관리되며, 담당자는 현장과 배송 상태를 실시간으로 조회할 수 있습니다.",
  },
  {
    title: "3. 재고관리",
    description:
      "ROLL, REAM, SKID, BOX 재고를 구분하여 지원하며, 원지의 17가지 속성값을 구분하여 관리합니다. QR코드를 적용하여 재고의 입고 일자부터 출고 시점까지 구체적인 트래킹 정보를 제공합니다.",
  },
  {
    title: "4. 컨버팅",
    description:
      "Papyrus는 유통 경쟁력인 컨버팅의 효율을 극대화합니다. 컨버팅 작업 스케줄링부터 손실율 집계 그리고 잔롤 재고 관리까지 지원합니다.",
  },
  {
    title: "5. 길로틴",
    description:
      "ROLL, REAM, SKID, BOX 재고를 구분하여 지원하며, 원지의 17가지 속성값을 구분하여 관리합니다. QR코드를 적용하여 재고의 입고 일자부터 출고 시점까지 구체적인 트래킹 정보를 제공합니다.",
  },
  {
    title: "6. 출고",
    description:
      "ROLL, REAM, SKID, BOX 재고를 구분하여 지원하며, 원지의 17가지 속성값을 구분하여 관리합니다. QR코드를 적용하여 재고의 입고 일자부터 출고 시점까지 구체적인 트래킹 정보를 제공합니다.",
  },
  {
    title: "7. 배송",
    description:
      "ROLL, REAM, SKID, BOX 재고를 구분하여 지원하며, 원지의 17가지 속성값을 구분하여 관리합니다. QR코드를 적용하여 재고의 입고 일자부터 출고 시점까지 구체적인 트래킹 정보를 제공합니다.",
  },
  {
    title: "8. 고객사",
    description:
      "ROLL, REAM, SKID, BOX 재고를 구분하여 지원하며, 원지의 17가지 속성값을 구분하여 관리합니다. QR코드를 적용하여 재고의 입고 일자부터 출고 시점까지 구체적인 트래킹 정보를 제공합니다.",
  },
  {
    title: "전자세금계산서",
    description:
      "ROLL, REAM, SKID, BOX 재고를 구분하여 지원하며, 원지의 17가지 속성값을 구분하여 관리합니다. QR코드를 적용하여 재고의 입고 일자부터 출고 시점까지 구체적인 트래킹 정보를 제공합니다.",
  },
  {
    title: "마감동기화",
    description:
      "ROLL, REAM, SKID, BOX 재고를 구분하여 지원하며, 원지의 17가지 속성값을 구분하여 관리합니다. QR코드를 적용하여 재고의 입고 일자부터 출고 시점까지 구체적인 트래킹 정보를 제공합니다.",
  },
  {
    title: "실시간모니터링",
    description:
      "ROLL, REAM, SKID, BOX 재고를 구분하여 지원하며, 원지의 17가지 속성값을 구분하여 관리합니다. QR코드를 적용하여 재고의 입고 일자부터 출고 시점까지 구체적인 트래킹 정보를 제공합니다.",
  },
];

const Feature2 = () => {
  const ref = useRef<HTMLElement>(null);
  const [isSmallWidth, setIsSmallWidth] = useState<boolean | null>(null);

  useEffect(() => {
    const onResize = () => {
      setIsSmallWidth(window.innerWidth <= 525);
    };

    window.addEventListener("resize", () => {
      onResize();
    });
    onResize();
  }, []);

  return (
    <section ref={ref} className={styles["feature-2"]}>
      <div className={styles["feature-2-inner"]}>
        <Suspense>
          {isSmallWidth === false && <Steps items={items} />}
          {isSmallWidth === true && <StepsM items={items} />}
        </Suspense>
      </div>
    </section>
  );
};

export default Feature2;
