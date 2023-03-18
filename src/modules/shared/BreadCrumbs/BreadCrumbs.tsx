import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BreadCrumbs.module.scss';
import home_icon from '../../../images/icons/home_icon.svg';
import shevron_r from '../../../images/icons/shevron-right.svg';
import { useLocation } from 'react-router';

interface Props {
  phoneName?: string
}

export const BreadCrumbs: React.FC<Props> = ({ phoneName }) => {
  const locationPathName = useLocation().pathname.slice(1).split('/')[0];
  const bcName = locationPathName[0].toUpperCase() + locationPathName.slice(1);

  return (
    <div className={styles.bread_crumb}>
      <Link
        to='/'
        className={styles.link}
      >
        <img
          src={home_icon}
          alt='homeIcon'
          className={styles.icon} />
      </Link>
      <img
        src={shevron_r}
        alt='homeIcon'
        className={styles.shevron} />

      {phoneName
        ? <>
          <Link
            to={`/${locationPathName}`}
            className={styles.link}
          >
            {bcName}
          </Link>
          <img
            src={shevron_r}
            alt='homeIcon'
            className={styles.shevron} />
          <span className={styles.noLink}>{phoneName}</span>
        </>
        : <span className={styles.noLink}>{bcName}</span>
      }
    </div>
  );
};
