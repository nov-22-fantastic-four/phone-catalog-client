import React from 'react';
import styles from './Loading.module.scss';

export const Loading: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <span className={styles.text}>Loading...</span>
      </div>
    </div>
  );
};
