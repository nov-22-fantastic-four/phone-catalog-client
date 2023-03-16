import React, { useState } from 'react';
import styles from './ProductCard.module.scss';
import Image from './images/image.jpg';
import Like from './images/like.svg';
import { PhoneInformation } from '../PhoneInformation';
import cn from 'classnames';

export const ProductCard: React.FC = () => {
  // const [selectedPhones, setSelectedPhones] = useState([]);
  const [isActive, setActive] = useState(false);

  const handleClick = (): void => {
    setActive(!isActive);
  };

  const phoneInfo = {
    screenText: 'Screen',
    screenValue: '5.8” OLED',
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
        value={phoneInfo.screenValue}
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
          className={cn({
            [styles.buttonSelected]: isActive,
            [styles.button]: !isActive
          })}
          onClick={handleClick}
        >
          {isActive
            ? 'Added'
            : 'Add to cart'}
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
