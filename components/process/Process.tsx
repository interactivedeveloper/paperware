import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';

import useRouteScrolling from 'hooks/useRouteScrolling';
import styles from './Process.module.scss';

const InquiryModal = dynamic(() => import("./components/InquiryModal"));

const Process = () => {
  const ref = useRef<HTMLElement>(null);
  useRouteScrolling({ ref, route: "history" });
  const [modalOpen, setModalOpen] = useState(false);

  const onOpenModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const onCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <section ref={ref} className={styles["process"]}>
        <div className={styles["process-inner"]}>
          <div className={styles["title-box"]}>
            <h3>
              Revolutionize your business
              <br />
              with PAPERWARE
            </h3>
            <p>
              신청 단계부터 책임집니다<i>!</i>
            </p>
            <div className={styles["apply"]}>
              <button type="button" onClick={onOpenModal}>
                <span>Papyrus 도입 문의</span>
              </button>
            </div>
          </div>
          <div className={styles["content-box"]}>
            <div aria-hidden></div>
            <ol>
              <li>
                <h4>1</h4>
                <h5>서비스 신청</h5>
                <p>
                  서비스 책임자가 <br />
                  직접 지원해 드립니다.
                </p>
              </li>
              <li>
                <h4>2</h4>
                <h5>데이터 마이그레이션</h5>
                <p>
                  기존 온/오프라인 데이터를
                  <br />
                  Papyrus 로 일괄 등록합니다.
                </p>
              </li>
              <li>
                <h4>3</h4>
                <h5>소프트웨어 사용 교육</h5>
                <p>
                  사무실, 현장, 배송 직원을 대상으로
                  <br />
                  Papyrus 사용법을 교육합니다.
                </p>
              </li>
              <li className={styles["blue"]}>
                <h4>4</h4>
                <h5>Papyrus 오픈</h5>
                <p>
                  유저 타입에 따른
                  <br />
                  서비스를 제공합니다.
                </p>
              </li>
            </ol>
          </div>
          <div className={styles["footer"]}>
            <div aria-hidden></div>
            <p>신청부터 도입까지 7일 이내</p>
          </div>
        </div>
      </section>
      {modalOpen && (
        <InquiryModal isOpen={modalOpen} onRequestClose={onCloseModal} />
      )}
    </>
  );
};

export default Process;
