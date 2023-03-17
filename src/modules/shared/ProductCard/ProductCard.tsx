import React, { useContext } from 'react';
import styles from './ProductCard.module.scss';
import { PhoneInformation } from '../PhoneInformation';
import cn from 'classnames';
import { type Product } from '../../../types';
import { Image } from '../Image';
import { CartContext, FavoritesContext } from '../../../context';

interface Props {
  product: Product,
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const cartContext = useContext(CartContext);
  const favoritesContext = useContext(FavoritesContext);

  const {
    id,
    name,
    ram,
    capacity,
    price,
    fullPrice,
    screen,
    image,
  } = product;

  const isAdded = cartContext.isAdded(id);
  const isFavorite = favoritesContext.isFavorite(id);

  const handleClickAdded = (): void => {
    if (isAdded) {
      cartContext.removeOne(id);

      return;
    }

    cartContext.addOne(id);
  };

  const handleClickLiked = (): void => {
    if (isFavorite) {
      favoritesContext.removeFavorite(id);

      return;
    }

    favoritesContext.addFavorite(id);
  };

  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={name}
        className={styles.image}
      />

      <h2 className={styles.name}>
        {name}
      </h2>

      <div className={styles.phonePrice}>
        <p className={styles.price}>
          {price}
        </p>

        <p className={styles.fullPrice}>
          {fullPrice}
        </p>
      </div>

      <div className={styles.line} />

      <PhoneInformation
        text="Screen"
        value={screen}
      />

      <PhoneInformation
        text="Capacity"
        value={capacity}
      />

      <PhoneInformation
        text="RAM"
        value={ram}
      />

      <div className={styles.buttonInfo}>
        <button
          className={cn({
            [styles.buttonSelected]: isAdded,
            [styles.button]: !isAdded
          })}
          onClick={handleClickAdded}
        >
          {isAdded
            ? 'Added'
            : 'Add to cart'}
        </button>

        <div
          className={styles.like}
          onClick={handleClickLiked}
        >
          <img
            alt="like"
            className={cn(styles.heartImg, {
              [styles.heartImgActive]: isFavorite,
            })}
          />
        </div>
      </div>
    </div>
  );
};
