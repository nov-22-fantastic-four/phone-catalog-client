import React from 'react';
import styles from './Navigation.module.scss';
import { NavigationLink } from '../NavigationLink';

interface Props {
  closeMenu?: () => void
};

export const Navigation: React.FC<Props> = ({ closeMenu }) => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavigationLink
            to="/"
            text="Home"
            closeMenu={closeMenu}
          />
        </li>
        <li className={styles.navItem}>
          <NavigationLink
            to="/phones"
            text="Phones"
            closeMenu={closeMenu}
          />
        </li>
        <li className={styles.navItem}>
          <NavigationLink
            to="/tablets"
            text="Tablets"
            closeMenu={closeMenu}
          />
        </li>
        <li className={styles.navItem}>
          <NavigationLink
            to="/accessories"
            text="Accessories"
            closeMenu={closeMenu}
          />
        </li>
      </ul>
    </nav>
  );
};
