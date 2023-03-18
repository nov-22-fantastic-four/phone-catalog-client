import React from 'react';
import styles from './ItemCount.module.scss';

interface Props {
  children: string,
}

export const ItemCount: React.FC<Props> = ({ children }) => (
  <p className={styles.text}>
    {children}
  </p>
);
