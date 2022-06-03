import { faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';

// import { useRecoilState } from "recoil";
// import { channelIOBootedState } from "store/store";
import styles from './Footer.module.scss';

const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  // const [channelIOBooted] = useRecoilState(channelIOBootedState);

  // useEffect(() => {
  //   const channelButtonEl = document.querySelector<HTMLElement>(
  //     "#ch-plugin-core >div:last-child"
  //   )!;

  //   const toggleChannelIOButtonPosition = () => {
  //     ScrollTrigger.create({
  //       trigger: ref.current,
  //       start: "top bottom",
  //       end: "bottom bottom",
  //       scrub: true,
  //       toggleActions: "play none none reset",
  //       onRefresh: () => {
  //         channelButtonEl.classList.remove("is-bottom");
  //         channelButtonEl.style.top = "";
  //       },
  //       onEnter: () => {
  //         channelButtonEl.classList.add("is-bottom");

  //         const footerYPosition =
  //           ref.current!.getBoundingClientRect().top +
  //           window.scrollY -
  //           channelButtonEl.getBoundingClientRect().height -
  //           24 +
  //           "px";

  //         channelButtonEl.style.top = footerYPosition;
  //       },
  //       onLeaveBack: () => {
  //         channelButtonEl.classList.remove("is-bottom");
  //         channelButtonEl.style.top = "";
  //       },
  //     });
  //   };

  //   if (channelIOBooted) {
  //     setTimeout(() => {
  //       // toggleChannelIOButtonPosition();
  //     }, 1000);
  //   }
  // }, [channelIOBooted, ref]);

  return (
    <footer ref={ref} className={styles["footer"]}>
      <div className={styles["footer-inner"]}>
        <div className={styles["footer-wrapper"]}>
          <div className={styles["footer-upper"]}>
            <h3>
              제지 산업의 새로운 패러다임
              <br />
              PAPERWARE Papyrus
            </h3>
            <ul>
              <li>
                <a href="tel:+821072470096">
                  <FontAwesomeIcon icon={faPhoneSquare} />
                  010-7247-0096
                </a>
              </li>
              <li>
                <a href="mailto:admin@paperware.kr">
                  <FontAwesomeIcon icon={faEnvelope} />
                  admin@paperware.kr
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["footer-lower"]}>
            <p>회사명 : (주)페이퍼웨어</p>
            <p>대표자 : 김정현</p>
            <p>개인정보관리자 : 김정현</p>
            <p>사업자등록번호 : 356-87-01989</p>
            <p>
              주소 : 서울특별시 성동구 성수일로8길 55 평화빌딩 8층, 페이퍼웨어
            </p>
            <p>Copyright (C) PAPERWARE INC. All Rights Reserved.</p>
            <p>
              <a href="#">서비스 이용약관</a>
              <a href="#">개인정보 처리방침</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
