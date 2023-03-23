import React from 'react';
import styles from './StubPageFavorite.module.scss';
import brokenHeart from '../../../images/broken_heart.png';

export const StubPageFavorite: React.FC = () => {
  return (
    <div className={styles.container}>
      <img
        src={brokenHeart}
        className={styles.photo}
        alt="broken heart icon"
      />
      <p
        className={styles.text}
      >
        You have no favorites yet. <br /> Why not add one?
      </p>
      <button className={styles.button}>Mark Favorite Now</button>
    </div>
  );
};
