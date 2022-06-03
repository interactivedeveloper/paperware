import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";

import About from "components/about/About";
import Certifications from "components/certifications/Certifications";
import Feature1 from "components/feature-1/Feature1";
import Feature2 from "components/feature-2/Feature2";
import Feature3 from "components/feature-3/Feature3";
import History from "components/history/History";
import Introduction from "components/introduction/Introduction";
import PapyrusIntroduction from "components/papyrus-introduction/PapyrusIntroduction";
import Partners from "components/partners/Partners";
import Process from "components/process/Process";
import Cover from "../components/cover/Cover";
import styles from "./Home.module.scss";

import type { NextPage } from "next";
gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PAPERWARE | (주)페이퍼웨어</title>
        <meta
          name="description"
          content="제지 산업의 유통 공급망 트래픽은 매년 증가하고 있습니다. 기업이 관리할 데이터는 기하급수적으로 늘어났지만, 운영 형태는 아날로그 방식에 고착되어 있습니다. 기존의 제지업 소프트웨어는 개선 의지가 없고, 상용 ERP는 지나치게 제한적입니다. 페이퍼웨어는 산업 최초로 공급망을 관리할 수 있는 B2B 클라우드 플랫폼, Papyrus 를 제공합니다. 제지 산업의 유통, 프린팅, 패키징까지 자동화하는 것이 페이퍼웨어의 존재 이유입니다."
        />
        <meta property="og:title" content="PAPERWARE | (주)페이퍼웨어" />
        <meta
          property="og:description"
          content="제지 산업의 유통 공급망 트래픽은 매년 증가하고 있습니다. 기업이 관리할 데이터는 기하급수적으로 늘어났지만, 운영 형태는 아날로그 방식에 고착되어 있습니다. 기존의 제지업 소프트웨어는 개선 의지가 없고, 상용 ERP는 지나치게 제한적입니다. 페이퍼웨어는 산업 최초로 공급망을 관리할 수 있는 B2B 클라우드 플랫폼, Papyrus 를 제공합니다. 제지 산업의 유통, 프린팅, 패키징까지 자동화하는 것이 페이퍼웨어의 존재 이유입니다."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cover />
      <Introduction />
      <PapyrusIntroduction />
      <hr className={styles["divider"]} />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <hr className={styles["divider"]} />
      <Certifications />
      <hr className={styles["divider"]} />
      <History />
      <Process />
      <About />
      <hr className={styles["divider"]} />
      <Partners />
    </>
  );
};

export default Home;
