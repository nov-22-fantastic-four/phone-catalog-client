import React from 'react';
import classNames from 'classnames';
import styles from './NavigationLink.module.scss';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string
  text: string
  closeMenu?: () => void
};

export const NavigationLink: React.FC<Props> = ({ to, text, closeMenu }) => {
  return (
    <NavLink
      className={({ isActive }) => classNames(styles.navLink, {
        [styles.isActive]: isActive
      })}
      to={to}
      onClick={closeMenu}
    >
      {text}
    </NavLink>
  );
};
