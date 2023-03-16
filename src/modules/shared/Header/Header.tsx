import React from 'react';
import classNames from 'classnames';
import styles from './Header.module.scss';
import logo from '../../../images/logo.svg';
import heart_icon from '../../../images/icons/heart_icon.svg';
import bag_icon from '../../../images/icons/bag_icon.svg';
import burger_icon from '../../../images/icons/burger-menu_icon.svg';

export const Header: React.FC = () => (
  <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
        <li className={styles.navItem}>
        <a href="#home">
        <img
        src={logo}
        alt="icon"
        className={styles.logo}
        />
      </a>
          </li>
          <li className={styles.navItem}>
            <a className={classNames(styles.navLink, styles.isActive)}
            href="#home">Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#phones">Phones</a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#tablets">Tablets</a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#accessories">Accessories</a>
          </li>
        </ul>
      </nav>

      <div className={styles.iconList}>
      <a className={styles.iconLink} href="#home">
        <img
        src={heart_icon}
        alt="icon"
        className={styles.icon}
        />
      </a>
      <a className={styles.iconLink} href="#home">
        <img
        src={bag_icon}
        alt="icon"
        className={styles.icon}
        />
      </a>
      <a className={styles.burger} href="#menu">
        <img
        src={burger_icon}
        alt="icon"
        className={styles.menu_icon}
        />
      </a>
      </div>
    </header>
);
