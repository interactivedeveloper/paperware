import { useRef } from 'react';

import useRouteScrolling from 'hooks/useRouteScrolling';
import Feature3Item from './components/Feature3Item';
import styles from './Feature3.module.scss';

const features = [
  {
    title: "전자세금계산서 발행",
    desc: "국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다. 국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 모든 국민은 거주·이전의 자유를 가진다.",
    src: "files.png",
    type: "img",
  },
  {
    title: "차량 관리 시스템 연동",
    desc: "국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다. 국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 모든 국민은 거주·이전의 자유를 가진다.",
    src: "outline.mp4",
    type: "video",
  },
  {
    title: "손실율 분석 · 동계",
    desc: "국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다. 국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 모든 국민은 거주·이전의 자유를 가진다.",
    src: "import-export.png",
    type: "img",
  },
  {
    title: "클라우드 서비스",
    desc: "국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다. 국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 모든 국민은 거주·이전의 자유를 가진다.",
    src: "word-count.png",
    type: "img",
  },
  {
    title: "지종 검색 태그",
    desc: "국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다. 국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 모든 국민은 거주·이전의 자유를 가진다.",
    src: "focus.png",
    type: "img",
  },
  {
    title: "공지사항 등록",
    desc: "국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다. 국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 모든 국민은 거주·이전의 자유를 가진다.",
    src: "auto-pair.mp4",
    type: "video",
  },
];

const Feature3 = () => {
  const ref = useRef<HTMLElement>(null);
  useRouteScrolling({ ref, route: "features" });

  return (
    <section ref={ref} className={styles["feature-3"]}>
      <h3>PAPYRUS</h3>
      <p className={styles["slogan"]}>Supplychain management system</p>
      <div>
        {features.map((feature) => (
          <Feature3Item key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Feature3;
