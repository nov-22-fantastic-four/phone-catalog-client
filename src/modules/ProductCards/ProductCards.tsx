import React from 'react';
import styles from './ProductCards.module.scss';

import { ProductCard } from '../shared/ProductCard';

export const ProductCards: React.FC = () => {
  return (
    <>
      <div className={styles.catalog}>
        <div className={styles.catalog__item}>
          <ProductCard />
        </div>

        <div className={styles.catalog__item}>
          <ProductCard />
        </div>

        <div className={styles.catalog__item}>
          <ProductCard />
        </div>

        <div className={styles.catalog__item}>
          <ProductCard />
        </div>

        <div className={styles.catalog__item}>
          <ProductCard />
        </div>

        <div className={styles.catalog__item}>
          <ProductCard />
        </div>

        <div className={styles.catalog__item}>
          <ProductCard />
        </div>

        <div className={styles.catalog__item}>
          <ProductCard />
        </div>

        <div className={styles.catalog__item}>
          <ProductCard />
        </div>

        <div className={styles.catalog__item}>
          <ProductCard />
        </div>

        <div className={styles.catalog__item}>
          <ProductCard />
        </div>

        <div className={styles.catalog__item}>
          <ProductCard />
        </div>

        <div className={styles.catalog__item}>
          <ProductCard />
        </div>

        <div className={styles.catalog__item}>
          <ProductCard />
        </div>

        <div className={styles.catalog__item}>
          <ProductCard />
        </div>

        <div className={styles.catalog__item}>
          <ProductCard />
        </div>
      </div>
    </>
  );
};
