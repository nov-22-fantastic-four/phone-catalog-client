import React from 'react';
import styles from './StubPageCart.module.scss';
import emptyCart from '../../../images/empty_cart.png';
import { Link } from 'react-router-dom';

export const StubPageCart: React.FC = () => {
  return (
    <div className={styles.container}>
      <img
        src={emptyCart}
        className={styles.photo}
        alt="broken heart icon"
      />
      <p className={styles.text}>
        Your cart is empty.
      </p>
      <p className={styles.subtitle}>
        You have no items in your shopping cart.
        <br />
        Let&apos;s go buy something!
      </p>

      <Link
        to="/phones"
        className={styles.button}
      >
        Browse products
      </Link>
    </div>
  );
};
