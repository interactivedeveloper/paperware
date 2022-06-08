import { faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  const ref = useRef<HTMLElement>(null);

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
