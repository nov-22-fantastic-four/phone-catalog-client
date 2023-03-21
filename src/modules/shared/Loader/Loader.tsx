import React from 'react';
import styles from './Loader.module.scss';

export const Loader: React.FC = () => (
  <div className={styles.loader}>
    <div className={styles.dot} />
    <div className={styles.centerDot} />
    <div className={styles.dot} />
  </div>
);
