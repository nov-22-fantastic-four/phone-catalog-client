import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BreadCrumbs.module.scss';

import home_icon from '../../../images/icons/home_icon.svg';

interface Props {
  locationPathName: string
}

export const BreadCrumbs: React.FC<Props> = ({ locationPathName }) => {
  const locationArr = locationPathName.slice(1).split('/');

  console.log(locationArr);

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
      {locationArr.map(page => (
        <Link
          key={page}
          to={`/${page}`}
          className={styles.link}
        >
          {`> ${page}`}
        </Link>
      ))}
    </div>
  );
};
