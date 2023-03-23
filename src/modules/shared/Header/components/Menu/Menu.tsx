import React, { useContext } from 'react';
import styles from './Menu.module.scss';
import heart_icon from '../../../../../images/icons/heart-empty.svg';
import bag_icon from '../../../../../images/icons/bag_icon.svg';
import { Navigation } from '../Navigation';
import { IconLink } from '../IconLink';
import { CartContext, FavoritesContext } from '../../../../../context';
import classNames from 'classnames';

interface Props {
  closeMenu: () => void
  isMenuOpen: boolean
}

export const Menu: React.FC<Props> = ({ closeMenu, isMenuOpen }) => {
  const { cartItems } = useContext(CartContext);
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className={classNames(styles.menu, {
      [styles.menuOpen]: isMenuOpen,
    })}>
      <Navigation closeMenu={closeMenu}/>

      <div className={styles.menu_footer}>
        <IconLink
          to="/favorites"
          alt="favorites"
          icon={heart_icon}
          items={favorites.length}
          closeMenu={closeMenu}
        />

        <IconLink
          to="/cart"
          alt="cartIcon"
          icon={bag_icon}
          items={cartItems.length}
          closeMenu={closeMenu}
        />
      </div>
    </div>
  );
};
