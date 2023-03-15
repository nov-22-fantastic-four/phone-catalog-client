import React from 'react';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <div>
      <h1 className={styles.header}>Header</h1>
      <p className={styles.text}>Text</p>
    </div>
  );
};
