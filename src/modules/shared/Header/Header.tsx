import React from 'react';
import styles from './Header.module.scss';
import logo from '../../../images/logo.svg';
import heart_icon from '../../../images/heart_icon.svg';
import bag_icon from '../../../images/bag_icon.svg';

export const Header: React.FC = () => (
  <header className={styles.header}>
      <nav className="nav">
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
{/* eslint-disable-next-line @typescript-eslint/restrict-plus-operands */}
            <a className={styles.navLink + ' ' + styles.isActive}
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
      </div>
    </header>
);
