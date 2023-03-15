import React from 'react';
import styles from './ProductCard.module.scss';
import Image from './images/image.jpg';
import Like from './images/like.svg';
import { PhoneInformation } from '../PhoneInformation';

export const ProductCard: React.FC = () => {
  const phoneInfo = {
    screenText: 'Screen',
    sreenValue: '5.8” OLED',
    capacityText: 'Capacity',
    capacityValue: '64 GB',
    ramText: 'RAM',
    ramValue: '4 GB'
  };

  return (
    <div className={styles.card}>
      <img
        src={Image}
        alt="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
        className={styles.image}
      />

      <h2 className={styles.title}>
        Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
      </h2>

      <div className={styles.phonePrice}>
        <p className={styles.currentPrice}>
          $799
        </p>

        <p className={styles.pastPrice}>
          $899
        </p>
      </div>

      <div className={styles.line}></div>

        <PhoneInformation
           text={phoneInfo.screenText}
           value={phoneInfo.sreenValue}
        />

        <PhoneInformation
           text={phoneInfo.capacityText}
           value={phoneInfo.capacityValue}
        />

        <PhoneInformation
           text={phoneInfo.ramText}
           value={phoneInfo.ramValue}
        />

      <div className={styles.buttonInfo}>
        <a
          href="#"
          className={styles.button}
          data-qa="hover"
        >
          Add to cart
        </a>

        <div className={styles.like}>
          <img
            src={Like}
            alt="like"
            className={styles.likeButton}
          />
        </div>
      </div>
      </div>
  );
};
