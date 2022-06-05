import classNames from 'classnames';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Carousel, {
  CarouselProps,
  CarouselSlideRenderControlProps,
} from 'nuka-carousel';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import useRouteScrolling from 'hooks/useRouteScrolling';
import { scrollStartedState } from 'store/store';
import MouseScroll from './components/MouseScroll';
import styles from './Cover.module.scss';

const settings: CarouselProps = {
  wrapAround: true,
  animation: "fade",
  autoplay: true,
  autoplayInterval: 5000,
  swiping: false,
  dragging: false,
  renderCenterLeftControls: null,
  renderCenterRightControls: null,
  renderBottomCenterControls: null,
};

const Cover = () => {
  const ref = useRef<HTMLElement>(null);
  useRouteScrolling({ ref, route: "" });
  const [_, setScrollStarted] = useRecoilState(scrollStartedState);

  const [slideActive, setSlideActive] = useState(0);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      start: "+=1 top",
      onEnter: () => setScrollStarted(true),
    });
    setTimeout(() => setScrollStarted(true), 5000);

    gsap.to("header", {
      scrollTrigger: {
        trigger: ref.current,
        start: "bottom +=1",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      duration: 0.2,
    });
  }, []);

  const beforeSlide = (currentSlide: number, nextSlide: number) =>
    setSlideActive(nextSlide % 5);

  const renderTopCenterControls = useCallback(
    ({ goToSlide }: CarouselSlideRenderControlProps) => (
      <ul className={styles["dots"]}>
        {[1, 2, 3, 4, 5].map((i) => (
          <li
            key={i}
            className={classNames(styles["dot"], {
              [styles["active"]]: i - 1 === slideActive,
            })}
          >
            <button
              onClick={() => {
                if (i - 1 !== slideActive) {
                  goToSlide(i - 1);
                }
              }}
            >
              {i - 1}
            </button>
          </li>
        ))}
      </ul>
    ),
    [slideActive]
  );

  return (
    <section id="home" className={styles["cover"]} ref={ref}>
      <div className={styles["cover-content"]}>
        <h2>
          <Image
            src="/images/logo.svg"
            alt="Paperware"
            width={334.218}
            height={86.437}
            layout="responsive"
            priority
          />
          Paperware
        </h2>
      </div>
      <Carousel
        {...settings}
        beforeSlide={beforeSlide}
        renderTopCenterControls={renderTopCenterControls}
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i}>
            <div className={styles["slide"]}>
              <Image
                src={`/images/main_visual0${i}.jpg`}
                layout="fill"
                objectFit="cover"
                alt=""
                priority={i === 1}
                loading={i === 1 ? "eager" : "lazy"}
                quality={90}
              />
            </div>
          </div>
        ))}
      </Carousel>
      <MouseScroll />
    </section>
  );
};

export default Cover;
