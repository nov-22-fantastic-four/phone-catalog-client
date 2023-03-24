import React, { useContext } from 'react';
import styles from './ProductCard.module.scss';
import { PhoneInformation } from './PhoneInformation';
import cn from 'classnames';
import { type Product } from '../../../types';
import { Image } from '../Image';
import { CartContext, FavoritesContext } from '../../../context';
import { Link } from 'react-router-dom';
import { EmptyHeartIcon, FullHeartIcon } from '../../icons';

interface Props {
  product: Product,
  showFullPrice?: boolean,
}

export const ProductCard: React.FC<Props> = ({
  product,
  showFullPrice = false,
}) => {
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
    itemId,
    category,
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
      <Link
        to={`/${category}/${itemId}`}
        className={styles.name}
      >
        <Image
          src={image}
          alt={name}
          className={styles.image}
        />
      </Link>

      <Link
        to={`/${category}/${itemId}`}
        className={styles.name}
      >
        {name}
      </Link>

      <div className={styles.phonePrice}>
        <p className={styles.price}>
          {price}
        </p>

        {showFullPrice && (
          <p className={styles.fullPrice}>
            {fullPrice}
          </p>
        )}
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
            [styles.buttonAdded]: isAdded,
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
          {isFavorite
            ? (
              <FullHeartIcon
                className={cn(styles.fullHeart, styles.heartIcon)}
              />)
            : (
              <EmptyHeartIcon
                className={cn(styles.emptyHeart, styles.heartIcon)}
              />)}
        </div>
      </div>
    </div>
  );
};
