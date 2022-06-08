import Link from 'next/link';
import { MouseEvent } from 'react';
import { scrollIntoView } from 'seamless-scroll-polyfill';

import styles from './MouseScroll.module.scss';

const MouseScroll = () => {
  const onLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollIntoView(document.querySelector("#features")!, {
      behavior: "smooth",
    });
  };

  return (
    <Link href="/#features" passHref>
      <a
        aria-label="scroll"
        className={styles["mouse-scroll"]}
        onClick={onLinkClick}
      >
        <div className={styles["mouse"]}>
          <div className={styles["wheel"]}></div>
        </div>
        <div className={styles["arrow"]}>
          <span />
          <span />
          <span />
        </div>
      </a>
    </Link>
  );
};

export default MouseScroll;
