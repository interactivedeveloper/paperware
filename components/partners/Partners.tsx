import Image from 'next/image';
import { useRef } from 'react';

import useRouteScrolling from 'hooks/useRouteScrolling';
import PartnersList from './components/PartnersList';
import PartnersText from './components/PartnersText';
import styles from './Partners.module.scss';

const partners = [
  "삼성물산",
  "LG",
  "한국심장재단",
  "서울특별시",
  "SANDBOX",
  "SARAMIN",
  "알바BOOK",
  "Special Olympics Korea",
  "P TOP INTERCUBE",
  "ㄱㅅㅎㄱ",
  "KITIA",
  "동심누리",
  "한국에너지정보문화재단",
  "BAS KOREA",
  "BIZ-C",
];

const Partners = () => {
  const ref = useRef<HTMLElement>(null);
  useRouteScrolling({ ref, route: "partners" });

  return (
    <section ref={ref} id="partners" className={styles["partners"]}>
      <div className={styles["partners-inner"]}>
        <PartnersText />
        <div className={styles["items-box"]}>
          <PartnersList
            title="기업 고객사"
            partners={partners}
            rows={3}
            buttonLabel="고객사"
          />
          <PartnersList
            title="협력 파트너"
            partners={partners}
            rows={1}
            buttonLabel="파트너"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
