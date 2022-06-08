import classNames from 'classnames';
import Image from 'next/image';
import useCollapse from 'react-collapsed';

import styles from './PartnersList.module.scss';

interface Props {
  title: string;
  partners: string[];
  rows: number;
  buttonLabel: string;
}

const PartnersList = ({ title, partners, rows, buttonLabel }: Props) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    collapsedHeight: 100 * rows,
  });

  return (
    <div className={styles["partners-list"]}>
      <h3>{title}</h3>
      <div
        {...getCollapseProps()}
        style={{ ...getCollapseProps().style, minHeight: `${100 * rows}px` }}
      >
        <ul>
          {partners.map((name, i) => (
            <li key={name}>
              <div className={styles["logo"]}>
                <Image
                  src={`/logos/logo_0${("0" + (i + 1)).slice(-2)}.png`}
                  alt={name}
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
              <span className={styles["label"]}>{name}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        {...getToggleProps()}
        className={classNames({ [styles["active"]]: isExpanded })}
      >
        {buttonLabel} {isExpanded ? "더보기" : "더보기"} <i />
      </button>
    </div>
  );
};

export default PartnersList;
