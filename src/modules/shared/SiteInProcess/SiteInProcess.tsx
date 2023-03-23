import React from 'react';
import styles from './SiteInProcess.module.scss';
import siteCoding from '../../../images/site_coding.jpg';

export const SiteInProcess: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Site coding
      </p>
      <img
        src={siteCoding}
        className={styles.photo}
        alt="site is coding"
      />
      <button className={styles.button}>Shop Now</button>
    </div>
  );
};
