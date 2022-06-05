import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Image from 'next/image';
import Carousel, {
  CarouselProps,
  CarouselSlideRenderControlProps,
} from 'nuka-carousel';
import { useCallback, useRef, useState } from 'react';

import useRouteScrolling from 'hooks/useRouteScrolling';
import styles from './Certifications.module.scss';

const slides = [
  {
    src: "/images/patent1.jpg",
    title: "속도, 편의성, 보안\n모두 제공하는 자체 기술력",
    description:
      "열락의 그러므로 보이는 인간이 청춘 어디 끓는다. 바이며, 불러 인생을 원질이 피에 것이다. 찾아 원질이 그러므로 목숨을 기관과 가는 수 하였으며, 품으며, 아니다. 천고에 길을 위하여 것이다. 보라, 대중을 그들에게 속잎나고, 때문이다. 같이 우리 영원히 피고, 뿐이다. 품었기 보내는 그들에게 인생에 심장의 얼마나 더운지라 때문이다. 아니더면, 예가 얼마나 새 크고 하였으며, 것이다. 부패를 꽃 뜨고, 가치를 온갖 품었기 말이다.",
    bullets: [
      "특허 번호 : 제 10-2322142 호",
      "발명의 명칭 : 지류 유통 장치를 위한 플랫폼을 제공하는 방법",
      "특허권자 : 김정현(페이퍼웨어)",
    ],
  },
  {
    src: "/images/patent2.jpg",
    title: "속도, 편의성, 보안\n모두 제공하는 자체 기술력2",
    description:
      "열락의 그러므로 보이는 인간이 청춘 어디 끓는다. 바이며, 불러 인생을 원질이 피에 것이다. 찾아 원질이 그러므로 목숨을 기관과 가는 수 하였으며, 품으며, 아니다. 천고에 길을 위하여 것이다. 보라, 대중을 그들에게 속잎나고, 때문이다. 같이 우리 영원히 피고, 뿐이다. 품었기 보내는 그들에게 인생에 심장의 얼마나 더운지라 때문이다. 아니더면, 예가 얼마나 새 크고 하였으며, 것이다. 부패를 꽃 뜨고, 가치를 온갖 품었기 말이다.",
    bullets: [
      "특허 번호 : 제 10-2322142 호",
      "발명의 명칭 : 지류 유통 장치를 위한 플랫폼을 제공하는 방법",
      "특허권자 : 김정현(페이퍼웨어)",
    ],
  },
  {
    src: "/images/patent3.jpg",
    title: "속도, 편의성, 보안\n모두 제공하는 자체 기술력3",
    description:
      "열락의 그러므로 보이는 인간이 청춘 어디 끓는다. 바이며, 불러 인생을 원질이 피에 것이다. 찾아 원질이 그러므로 목숨을 기관과 가는 수 하였으며, 품으며, 아니다. 천고에 길을 위하여 것이다. 보라, 대중을 그들에게 속잎나고, 때문이다. 같이 우리 영원히 피고, 뿐이다. 품었기 보내는 그들에게 인생에 심장의 얼마나 더운지라 때문이다. 아니더면, 예가 얼마나 새 크고 하였으며, 것이다. 부패를 꽃 뜨고, 가치를 온갖 품었기 말이다.",
    bullets: [
      "특허 번호 : 제 10-2322142 호",
      "발명의 명칭 : 지류 유통 장치를 위한 플랫폼을 제공하는 방법",
      "특허권자 : 김정현(페이퍼웨어)",
    ],
  },
  {
    src: "/images/patent4.jpg",
    title: "속도, 편의성, 보안\n모두 제공하는 자체 기술력4",
    description:
      "열락의 그러므로 보이는 인간이 청춘 어디 끓는다. 바이며, 불러 인생을 원질이 피에 것이다. 찾아 원질이 그러므로 목숨을 기관과 가는 수 하였으며, 품으며, 아니다. 천고에 길을 위하여 것이다. 보라, 대중을 그들에게 속잎나고, 때문이다. 같이 우리 영원히 피고, 뿐이다. 품었기 보내는 그들에게 인생에 심장의 얼마나 더운지라 때문이다. 아니더면, 예가 얼마나 새 크고 하였으며, 것이다. 부패를 꽃 뜨고, 가치를 온갖 품었기 말이다.",
    bullets: [
      "특허 번호 : 제 10-2322142 호",
      "발명의 명칭 : 지류 유통 장치를 위한 플랫폼을 제공하는 방법",
      "특허권자 : 김정현(페이퍼웨어)",
    ],
  },
];

const settings: CarouselProps = {
  wrapAround: true,
  autoplay: true,
  autoplayInterval: 5000,
  renderCenterLeftControls: null,
  renderCenterRightControls: null,
};

const Certifications = () => {
  const ref = useRef<HTMLElement>(null);
  useRouteScrolling({ ref, route: "certifications" });

  const [slideActive, setSlideActive] = useState(0);

  const beforeSlide = (currentSlide: number, nextSlide: number) =>
    setSlideActive(nextSlide % slides.length);

  const renderBottomCenterControls = useCallback(
    ({ goToSlide }: CarouselSlideRenderControlProps) => (
      <ul className={styles["dots"]}>
        {slides.map(({ title }, i) => (
          <li
            key={title}
            className={classNames(styles["dot"], {
              [styles["active"]]: i === slideActive,
            })}
          >
            <button
              onClick={() => {
                if (i !== slideActive) {
                  goToSlide(i);
                }
              }}
            >
              {i}
            </button>
          </li>
        ))}
      </ul>
    ),
    [slideActive]
  );

  return (
    <section ref={ref} id="certifications" className={styles["certifications"]}>
      <Carousel
        {...settings}
        beforeSlide={beforeSlide}
        className={styles["carousel"]}
        renderBottomCenterControls={renderBottomCenterControls}
        {...{ dragThreshold: 0.1 }}
      >
        {slides.map(({ src, title, description, bullets }, i) => (
          <div key={title}>
            <div className={styles["slide"]}>
              <div className={styles.image}>
                <Image src={src} layout="fill" alt="" loading="lazy" />
              </div>
              <div className={styles["slide-content"]}>
                <h3>{title}</h3>
                <p>{description}</p>
                {bullets?.length && (
                  <ul>
                    {bullets.map((val) => (
                      <li key={val}>
                        <FontAwesomeIcon icon={faCertificate} /> {val}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Certifications;
