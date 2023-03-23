import React from 'react';
import styles from './SiteInProcess.module.scss';
import siteCoding from '../../../images/site_coding.jpg';
import { Link } from 'react-router-dom';

export const SiteInProcess: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Coming soon
      </p>
      <img
        src={siteCoding}
        className={styles.photo}
        alt="site is coding"
      />
      <Link to="/" className={styles.button}>Home Page</Link>
    </div>
  );
};
