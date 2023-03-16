import React, { useState } from 'react';
import styles from './ProductCard.module.scss';
import Image from './images/image.jpg';
import heartIcon from '../../../images/icons/heart_icon.svg';
import redHeartIcon from '../../../images/icons/red_heart_icon.svg';
import { PhoneInformation } from '../PhoneInformation';
import cn from 'classnames';

export const ProductCard: React.FC = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleClickAdded = (): void => {
    setIsAdded(!isAdded);
  };

  const handleClickLiked = (): void => {
    setIsLiked(!isLiked);
  };

  const phoneInfo = {
    screenText: 'Screen',
    title: 'Apple iPhone Xs 64GB Silver (iMT9G2FS/A)',
    screenValue: '5.8” OLED',
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
        <button
          className={cn({
            [styles.buttonSelected]: isAdded,
            [styles.button]: !isAdded
          })}
          onClick={handleClickAdded}
        >
          {isAdded
            ? 'Added'
            : 'Add to cart'}
        </button>

        <div
          className={styles.like}
          onClick={handleClickLiked}
        >
          {isLiked
            ? (
              <img
                src={redHeartIcon}
                alt="like"
                className={styles.likeButton}
              />)
            : (
              <img
                src={heartIcon}
                alt="like"
                className={styles.likeButton}
              />)
          }
        </div>
      </div>
    </div>
  );
};
