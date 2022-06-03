import classNames from 'classnames';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Slider from 'react-slick';

import styles from './Feature1.module.scss';

const tabs = [
  {
    title: "OMS (주문관리시스템)",
    label: "OMS",
    description:
      "천자만홍이 것은 온갖 얼음에 남는 싶이 아니한 소리다. 이것은 눈이 것이다.\n열락의 그러므로 보이는 인간이 청춘 어디 끓는다.",
  },
  {
    title: "MES (생산관리시스템)",
    label: "MES",
    description:
      "천자만홍이 것은 온갖 얼음에 남는 싶이 아니한 소리다. 이것은 눈이 것이다.\n열락의 그러므로 보이는 인간이 청춘 어디 끓는다.",
  },
  {
    title: "TMS (운송관리시스템)",
    label: "TMS",
    description:
      "천자만홍이 것은 온갖 얼음에 남는 싶이 아니한 소리다. 이것은 눈이 것이다.\n열락의 그러므로 보이는 인간이 청춘 어디 끓는다.",
  },
  {
    title: "WMS (창고 & 재고관리시스템)",
    label: "WMS",
    description:
      "천자만홍이 것은 온갖 얼음에 남는 싶이 아니한 소리다. 이것은 눈이 것이다.\n열락의 그러므로 보이는 인간이 청춘 어디 끓는다.",
  },
  {
    title: "내역관리",
    label: "내역관리",
    description:
      "천자만홍이 것은 온갖 얼음에 남는 싶이 아니한 소리다. 이것은 눈이 것이다.\n열락의 그러므로 보이는 인간이 청춘 어디 끓는다.",
  },
  {
    title: "API 연동",
    label: "API 연동",
    description:
      "천자만홍이 것은 온갖 얼음에 남는 싶이 아니한 소리다. 이것은 눈이 것이다.\n열락의 그러므로 보이는 인간이 청춘 어디 끓는다.",
  },
  {
    title: "마감 자동화",
    label: "마감 자동화",
    description:
      "천자만홍이 것은 온갖 얼음에 남는 싶이 아니한 소리다. 이것은 눈이 것이다.\n열락의 그러므로 보이는 인간이 청춘 어디 끓는다.",
  },
  {
    title: "설정",
    label: "설정",
    description:
      "천자만홍이 것은 온갖 얼음에 남는 싶이 아니한 소리다. 이것은 눈이 것이다.\n열락의 그러므로 보이는 인간이 청춘 어디 끓는다.",
  },
  {
    title: "기타",
    label: "기타",
    description:
      "천자만홍이 것은 온갖 얼음에 남는 싶이 아니한 소리다. 이것은 눈이 것이다.\n열락의 그러므로 보이는 인간이 청춘 어디 끓는다.",
  },
];

const settings = {
  dots: false,
  arrows: false,
  speed: 500,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Feature1 = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sliderRef = useRef<Slider>(null);
  const [slideActive, setSlideActive] = useState(0);

  const slickGoTo = (i: number) => sliderRef.current?.slickGoTo(i);

  const beforeChange = (currentSlide: number, nextSlide: number) => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );
    setSlideActive(nextSlide);
  };

  return (
    <section className={styles["feature-1"]}>
      <h3 ref={titleRef}>{tabs[slideActive].title}</h3>
      <ul className={styles["tabs"]}>
        {tabs.map(({ label }, i) => (
          <li key={label}>
            <button
              className={classNames({
                [styles["active"]]: i === slideActive,
              })}
              onClick={() => slickGoTo(i)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
      <Slider
        {...settings}
        ref={sliderRef}
        beforeChange={beforeChange}
        className={styles["carousel"]}
      >
        {tabs.map(({ label, description }, i) => (
          <div key={label} className={styles["slide"]}>
            <p>{description}</p>
            <Image
              src={`/images/feature1.png`}
              width={2048}
              height={1667}
              layout="responsive"
              alt=""
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Feature1;
