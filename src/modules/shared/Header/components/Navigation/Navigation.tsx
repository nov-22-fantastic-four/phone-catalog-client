import React from 'react';
import styles from './Navigation.module.scss';
import { NavigationLink } from '../NavigationLink';

export const Navigation: React.FC = () => (
  <nav>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <NavigationLink to="/" text="Home" />
      </li>
      <li className={styles.navItem}>
        <NavigationLink to="/phones" text="Phones" />
      </li>
      <li className={styles.navItem}>
        <NavigationLink to="/tablets" text="Tablets" />
      </li>
      <li className={styles.navItem}>
        <NavigationLink to="/accessories" text="Accessories" />
      </li>
    </ul>
  </nav>
);
