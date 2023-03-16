import React from 'react';
import classNames from 'classnames';
import styles from './IconLink.module.scss';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string
  alt: string
  icon: string
  items: number
};

export const IconLink: React.FC<Props> = ({ to, icon, alt, items }) => (
  <NavLink
    className={({ isActive }) => classNames(styles.navLink, {
      [styles.isActive]: isActive
    })}
    to={to}
  >
    {
      !!items && <div className={styles.counter}>
        {items}
      </div>
    }
    <img
      src={icon}
      alt={alt}
      className={styles.icon}
    />
  </NavLink>
);
