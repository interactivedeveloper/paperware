import {
  faCubes,
  faEye,
  faRotate,
  faScroll,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import useRouteScrolling from 'hooks/useRouteScrolling';
import styles from './PapyrusIntroduction.module.scss';

const PapyrusIntroduction = () => {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useRouteScrolling({ ref, route: "features" });

  useEffect(() => {
    ScrollTrigger.create({
      trigger: videoRef.current,
      start: "top bottom",
      end: "bottom top",
      onEnter: playVideo,
      onEnterBack: playVideo,
      onLeave: pauseVideo,
      onLeaveBack: pauseVideo,
    });
  }, []);

  const playVideo = () => {
    const playPromise = videoRef.current!.play();
    if (playPromise !== undefined) {
      playPromise.then((_) => {}).catch((error) => {});
    }
  };

  const pauseVideo = () => {
    videoRef.current!.pause();
  };

  return (
    <section ref={ref} className={styles["feature"]}>
      <div className={styles["feature-inner"]}>
        <div className={styles["feature-left"]}>
          <div className={styles["feature-content"]}>
            <h3>
              제지 유통 산업
              <br />
              공급망 관리 플랫폼, Papyrus
            </h3>
            <p>
              E-Commerce 성장과 ESG 경영 정책으로 종이의 수요와 유통량은 매년
              증가하고 있지만, 제지 산업의 환경은 여전히 아날로그식 운영에
              정체되어 있습니다. 이제 불필요한 업무는 Papyrus 솔루션에 맡기고,
              유통 경쟁력을 확보하세요.
            </p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faShoppingCart} /> 원지 비교 검색과 수 ·
                발주를 온라인으로 한번에
              </li>
              <li>
                <FontAwesomeIcon icon={faEye} /> 컨버팅, 길로틴, 입출고, 물류
                운송을 실시간으로
              </li>
              <li>
                <FontAwesomeIcon icon={faCubes} /> 모든 지종을 ROLL, REAM, SKID,
                BOX 형태로 세부 관리
              </li>
              <li>
                <FontAwesomeIcon icon={faRotate} /> 월 거래 내역 마감을 Papyrus
                로 자동화
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["feature-right"]}>
          <video
            ref={videoRef}
            src="/images/dashboard.mp4"
            autoPlay={false}
            muted
            loop
            controls={false}
            playsInline
          />
          <div className={styles["mobile-dashboard"]}>
            <Image
              src={`/images/dashboard.webp?jpg`}
              layout="responsive"
              alt=""
              loading="lazy"
              width={1000}
              height={563}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PapyrusIntroduction;
