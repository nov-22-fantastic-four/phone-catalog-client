import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { useWindowSize } from 'usehooks-ts';
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
  const { width } = useWindowSize();
  const { cartItems } = useContext(CartContext);
  const { favorites } = useContext(FavoritesContext);

  const notMobileVersion = width > 641;

  const handleClick = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <LogoLink className={styles.logo} />

        {notMobileVersion && <Navigation />}

        {notMobileVersion &&
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
              items={cartItems.length}
            />
          </div>}

        <button onClick={handleClick} className={styles.menu_button}>
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
      {isMenuOpen && <Menu />}
    </>
  );
};
