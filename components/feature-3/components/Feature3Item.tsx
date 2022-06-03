import Image from 'next/image';
import { memo } from 'react';

import styles from './Feature3Item.module.scss';

interface Props {
  title: string;
  desc: string;
  src: string;
  type: string;
}

const Feature3Item = ({ title, desc, src, type }: Props) => {
  return (
    <div className={styles["feature-box"]}>
      <div className={styles["feature-box-img"]}>
        {type === "img" ? (
          <Image
            src={`/images/feature3-${src}`}
            layout="fill"
            objectFit="cover"
            alt=""
            loading="lazy"
          />
        ) : (
          <video
            src={`/images/feature3-${src}`}
            autoPlay
            loop
            muted
            controls={false}
            playsInline
          />
        )}
      </div>
      <p className={styles["feature-box-title"]}>{title}</p>
      <p className={styles["feature-box-desc"]}>{desc}</p>
    </div>
  );
};

export default memo(Feature3Item);
