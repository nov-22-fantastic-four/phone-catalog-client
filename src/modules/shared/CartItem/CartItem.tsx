import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context';
import { type Product } from '../../../types';
import { Image } from '../Image';
import styles from './CartItem.module.scss';
import { CrossIcon, MinusIcon, PlusIcon } from '../../icons';

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

  const isRemovingDisabled = count === 1;
  const isAddingDisabled = count > 9;

  return (
    <div className={styles.CartContainer}>
      <div className={styles.left}>
        <button
          className={styles.removeButton}
          onClick={() => { removeItem(product.id); }}
        >
          <CrossIcon className={styles.icon} />
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
      </div>

      <div className={styles.right}>
        <div className={styles.actions}>
          <button
            className={styles.button}
            onClick={() => { removeOne(product.id); }}
            disabled={isRemovingDisabled}
          >
            <MinusIcon className={styles.icon} />
          </button>

          <p className={styles.count}>{count}</p>

          <button
            className={styles.button}
            onClick={() => {
              addOne(product.id);
            }}
            disabled={isAddingDisabled}
          >
            <PlusIcon className={styles.icon} />
          </button>
        </div>

        <p className={styles.price}>
          {price}
        </p>
      </div>
    </div>
  );
};
