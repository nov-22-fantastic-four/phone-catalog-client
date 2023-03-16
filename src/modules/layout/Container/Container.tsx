import React from 'react';
import styles from './Container.module.scss';

interface Props {
  children: React.ReactNode
}

export const Container: React.FC<Props> = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);
