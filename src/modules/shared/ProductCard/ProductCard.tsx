import React, { useState } from 'react';
import styles from './ProductCard.module.scss';
import Image from './images/image.jpg';
import Like from './images/like.svg';
import { PhoneInformation } from '../PhoneInformation';

export const ProductCard: React.FC = () => {
  // const [selectedPhones, setSelectedPhones] = useState([]);
  const [isActive, setActive] = useState(false);

  const handleClick = (): void => {
    setActive(!isActive);
  };

  const phoneInfo = {
    screenText: 'Screen',
    title: 'Apple iPhone Xs 64GB Silver (iMT9G2FS/A)',
    sreenValue: '5.8” OLED',
    currentPrice: '$799',
    pastPrice: '$899',
    capacityText: 'Capacity',
    capacityValue: '64 GB',
    ramText: 'RAM',
    ramValue: '4 GB'
  };

  return (
    <div className={styles.card}>
      <img
        src={Image}
        alt={phoneInfo.title}
        className={styles.image}
      />

      <h2 className={styles.title}>
        {phoneInfo.title}
      </h2>

      <div className={styles.phonePrice}>
        <p className={styles.currentPrice}>
          {phoneInfo.currentPrice}
        </p>

        <p className={styles.pastPrice}>
        {phoneInfo.pastPrice}
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
        {isActive
          ? (
          <a
          href="#"
          className={styles.buttonSelected}
          onClick={handleClick}
        >
          Added
        </a>
            )
          : (
          <a
          href="#"
          className={styles.button}
          onClick={handleClick}
        >
          Add to cart
        </a>
            )}

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
