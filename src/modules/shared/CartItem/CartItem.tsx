import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context';
import { type Product } from '../../../types';
import { Image } from '../Image';
import styles from './CartItem.module.scss';

interface Props {
  product: Product
  count: number
}

export const CartItem: React.FC<Props> = ({ product, count }) => {
  const { addOne, removeOne, removeItem } = useContext(CartContext);
  const {
    name,
    price,
    image,
    itemId,
    category,
  } = product;

  return (
    <div className={styles.CartContainer}>
      <button
        className={styles.removeButton}
        onClick={() => { removeItem(product.id); }}
      >
        X
      </button >
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={name}
          className={styles.image}
        />
      </div>
      <Link
        to={`/${category}/${itemId}`}
        className={styles.name}
      >
        {name}
      </Link>
      <button
        className={styles.button}
        onClick={() => { removeOne(product.id); }}
      >
        -
      </button>
      <p className={styles.count}>{count}</p>
      <button
        className={styles.button}
        onClick={() => { addOne(product.id); }}
      >
        +
      </button>
      <p className={styles.price}>
        {price}
      </p>
    </div>
  );
};
