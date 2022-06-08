import classNames from 'classnames';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

import useRouteScrolling from 'hooks/useRouteScrolling';
import styles from './About.module.scss';

const tabs = ["본사", "서울"];

const About = () => {
  const ref = useRef<HTMLElement>(null);
  useRouteScrolling({ ref, route: "about" });
  const [slideActive, setSlideActive] = useState(0);
  const [apiLoaded, setApiLoaded] = useState(false);
  const [mapLoadDeferred, setMapLoadDeferred] = useState(false);

  // about section 진입시 네이버 지도 레이지 로드
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top bottom",
      onEnter: loadMap,
    });
  }, []);

  useEffect(() => {
    if (apiLoaded && mapLoadDeferred) {
      loadMap();
    }
  }, [apiLoaded, mapLoadDeferred]);

  const loadMap = () => {
    if (!apiLoaded) {
      setMapLoadDeferred(true);
      return;
    }

    const { naver } = window;
    const mapOptions = {
      zoom: 17,
      zoomControl: true,
      draggable:
        !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ),
      pinchZoom: true,
      scrollWheel: true,
      keyboardShortcuts: true,
      disableDoubleTapZoom: false,
      disableDoubleClickZoom: false,
      disableTwoFingerTapZoom: false,
    };
    const position1 = new naver.maps.LatLng(35.1207, 128.9617);
    const map1 = new naver.maps.Map("map1", {
      ...mapOptions,
      center: position1,
    });
    const marker1 = new naver.maps.Marker({
      position: position1,
      map: map1,
      title: "부산광역시 사상구 하신번영로 445",
    });
    const position2 = new naver.maps.LatLng(37.5452, 127.0567);
    const map2 = new naver.maps.Map("map2", {
      ...mapOptions,
      center: position2,
    });
    const marker2 = new naver.maps.Marker({
      position: position2,
      map: map2,
      title: "서울특별시 성동구 성수일로8길 55",
    });
  };

  return (
    <>
      <Script
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_API}`}
        strategy="lazyOnload"
        onLoad={() => setApiLoaded(true)}
      ></Script>
      <section id="about" ref={ref} className={styles["about"]}>
        <div>
          <h3>
            <Image
              src="/images/logo.svg"
              alt="Paperware"
              width={334.218}
              height={86.437}
              layout="responsive"
              loading="lazy"
            />
            Paperware
          </h3>
          <p>
            제지 산업의 유통 공급망 트래픽은 매년 증가하고 있습니다. 기업이
            관리할 데이터는 기하급수적으로 늘어났지만, 운영 형태는 아날로그
            방식에 고착되어 있습니다. 기존의 제지업 소프트웨어는 개선 의지가
            없고, 상용 ERP는 지나치게 제한적입니다.
          </p>
          <p>
            페이퍼웨어는 산업 최초로 공급망을 관리할 수 있는 B2B 클라우드
            플랫폼, Papyrus 를 제공합니다. 제지 산업의 유통, 프린팅, 패키징까지
            자동화하는 것이 페이퍼웨어의 존재 이유입니다.
          </p>
          <div className={styles["about-content"]}>
            <div className={styles["about-text"]}>
              <Image
                src="/images/about_bg.webp?jpg"
                layout="fill"
                loading="lazy"
                alt=""
                objectFit="cover"
              />
              <ul>
                <li>
                  <span>회사명</span>주식회사 페이퍼웨어
                </li>
                <li>
                  <span>대표자명</span>김정현
                </li>
                <li>
                  <span>설립일</span>2020.07.13
                </li>
                <li>
                  <span>본사</span>부산광역시 사상구 하신번영로 445
                </li>
                <li>
                  <span>서울사무소</span>서울특별시 성동구 성수일로8길 55
                </li>
                <li>
                  <span>TEL</span>02-1577-0123
                </li>
                <li>
                  <span>EMAIL</span>info@paperware.kr
                </li>
                <li>
                  <span>사업분야</span>제지 산업 공급망 관리 플랫폼 개발
                </li>
              </ul>
            </div>
            <div className={styles["carousel-container"]}>
              <div
                id="map1"
                style={{
                  width: "100%",
                  height: "440px",
                  display: slideActive === 0 ? "block" : "none",
                }}
              />
              <div
                id="map2"
                style={{
                  width: "100%",
                  height: "440px",
                  display: slideActive === 0 ? "none" : "block",
                }}
              />
              <ul className={styles["dots"]}>
                {tabs.map((label, i) => (
                  <li key={label}>
                    <button
                      className={classNames({
                        [styles["active"]]: i === slideActive,
                      })}
                      onClick={() => setSlideActive(i)}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
