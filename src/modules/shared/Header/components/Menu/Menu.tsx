import React from 'react';
import styles from './Menu.module.scss';
import heart_icon from '../../../../../images/icons/heart-empty.svg';
import bag_icon from '../../../../../images/icons/bag_icon.svg';
import { Navigation } from '../Navigation';
import { IconLink } from '../IconLink';

export const Menu: React.FC = () => (
  <div className={styles.menu}>
    <Navigation />

    <div className={styles.menu_footer}>
      <IconLink
        to="/favorite"
        alt="favorites"
        icon={heart_icon}
        items={3}
      />

      <IconLink
        to="/cart"
        alt="cartIcon"
        icon={bag_icon}
        items={10}
      />
    </div>
  </div>
);
