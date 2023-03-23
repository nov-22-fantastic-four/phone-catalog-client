import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useMediaQuery } from 'usehooks-ts';
import styles from './Header.module.scss';
import heart_icon from '../../../images/icons/heart-empty.svg';
import bag_icon from '../../../images/icons/bag_icon.svg';
import burger_icon from '../../../images/icons/burger-menu_icon.svg';
import close_icon from '../../../images/icons/close-menu_icon.svg';
import { Navigation } from './components/Navigation';
import { IconLink } from './components/IconLink';
import { Menu } from './components/Menu';
import { LogoLink } from '../LogoLink';
import { CartContext, FavoritesContext } from '../../../context';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const { favorites } = useContext(FavoritesContext);
  const notMobileVersion = useMediaQuery('(min-width: 640px)');

  const totalCartItem =
    cartItems.reduce((total, item) => total + item.count, 0);

  const handleClick = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = (): void => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    isMenuOpen && !notMobileVersion
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'auto';
  }, [isMenuOpen, !notMobileVersion]);

  return (
    <>
      <header className={classNames(styles.header,
        { [styles.headerOpenMenu]: isMenuOpen && !notMobileVersion }
      )}>
        <LogoLink className={styles.logo} />

        <div className={styles.navBar}>
          <Navigation />
        </div>

        <div className={classNames(styles.iconList, styles.leftIcon)}
        >
          <IconLink
            to="/favorites"
            alt="favorites"
            icon={heart_icon}
            items={favorites.length}
          />

          <IconLink
            to="/cart"
            alt="cartIcon"
            icon={bag_icon}
            items={totalCartItem}
          />
        </div>

        <button
          onClick={handleClick}
          className={styles.menu_button}
        >
          {!isMenuOpen
            ? <img
              src={burger_icon}
              alt="menuOpen"
              className={styles.menu_icon}
            />
            : <img
              src={close_icon}
              alt="menuClose"
              className={styles.menu_icon}
            />
          }
        </button>
      </header>
      <Menu
        closeMenu={handleCloseMenu}
        isMenuOpen={isMenuOpen}
      />
    </>
  );
};
