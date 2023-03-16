import React from 'react';
import styles from './Grid.module.scss';

interface Props {
  children: React.ReactNode
}

export const Grid: React.FC<Props> = ({ children }) => (
  <div className={styles.grid}>
    {children}
  </div>
);
