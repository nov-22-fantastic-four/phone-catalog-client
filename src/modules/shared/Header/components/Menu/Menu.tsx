import React from 'react';
import styles from './Menu.module.scss';
import classNames from 'classnames';
import logo from '../../../../../images/logo.svg';
import close_icon from '../../../../../images/icons/close-menu_icon.svg';
import heart_icon from '../../../../../images/icons/heart_icon.svg';
import bag_icon from '../../../../../images/icons/bag_icon.svg';

export const Menu: React.FC = () => (
  <div className={styles.menu}>
    <div className={styles.menu_header}>
      <a href="#home">
        <img
          src={logo}
          alt="icon"
          className={styles.logo} />
      </a>

      <a className={styles.burger} href="#menu">
        <img
          src={close_icon}
          alt="icon"
          className={styles.menu_icon} />
      </a>
    </div>
    <nav>
      <ul className={styles.navList}>
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
          <a className={classNames(styles.navLink, styles.isActive)}
            href="#accessories">Accessories</a>
        </li>
      </ul>
    </nav>
    <footer className={styles.menu_footer}>
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
    </footer>
  </div>
);
