import React from 'react';
import styles from './PageTitle.module.scss';

interface Props {
  children: string,
}

export const PageTitle: React.FC<Props> = ({ children }) => (
  <h1 className={styles.title}>
    {children}
  </h1>
);
