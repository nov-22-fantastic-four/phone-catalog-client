import React from 'react';
import styles from './GridItem.module.scss';

interface Props {
  children: React.ReactNode
}

export const GridItem: React.FC<Props> = ({ children }) => (
  <div className={styles.item}>
    {children}
  </div>
);
