import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import { scrollIntoView } from 'seamless-scroll-polyfill';

import { activeRouteState } from 'store/store';
import styles from './Header.module.scss';

const nav = [
  { label: "Features", href: "/#features" },
  { label: "Certifications", href: "/#certifications" },
  { label: "History", href: "/#history" },
  { label: "About", href: "/#about" },
  { label: "Partners", href: "/#partners" },
];

const Header = () => {
  const [activeRoute] = useRecoilState(activeRouteState);
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen((open) => {
      if (open) {
        document.body.style.overflow = "";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !open;
    });
  };

  const onLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setNavOpen(false);
    document.body.style.overflow = "";
    scrollIntoView(document.querySelector(href.slice(1))!, {
      behavior: "smooth",
    });
  };

  return (
    <header
      className={classNames(styles["header"], { [styles["active"]]: navOpen })}
    >
      <h1>
        <Link href="/#home" passHref>
          <a
            className={styles["logo"]}
            onClick={(e) => onLinkClick(e, "/#home")}
          >
            <Image
              src="/images/logo.svg"
              width={334.218}
              height={86.437}
              alt="paperware"
              layout="responsive"
              loading="lazy"
            />
            Paperware
          </a>
        </Link>
      </h1>
      <button className={styles["nav-toggle"]} onClick={toggleNav}>
        <i>
          <div className={styles["top"]}></div>
          <div className={styles["middle-1"]}></div>
          <div className={styles["middle-2"]}></div>
          <div className={styles["bottom"]}></div>
        </i>
      </button>
      <nav
        className={classNames({
          [styles["active"]]: navOpen,
        })}
      >
        <ul>
          {nav.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} passHref>
                <a
                  className={classNames({
                    [styles["active"]]: activeRoute === href.slice(2),
                  })}
                  onClick={(e) => onLinkClick(e, href)}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
          <li>
            <a href="http://papyrus.paperware.kr/">Papyrus</a>
          </li>
          <li>
            <a href="https://paperware.oopy.io/">Apply</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
