import React from 'react';
import classNames from 'classnames';
import styles from './IconLink.module.scss';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string
  alt: string
  icon: string
  items: number
  closeMenu?: () => void
};

export const IconLink: React.FC<Props> = ({
  to,
  icon,
  alt,
  items,
  closeMenu,
}) => (
  <NavLink
    className={({ isActive }) => classNames(styles.navLink, {
      [styles.isActive]: isActive
    })}
    to={to}
    onClick={closeMenu}
  >
    {
      !!items && <div className={styles.counter}>
        {items > 99
          ? 99
          : items}
      </div>
    }
    <img
      src={icon}
      alt={alt}
      className={styles.icon}
    />
  </NavLink>
);
