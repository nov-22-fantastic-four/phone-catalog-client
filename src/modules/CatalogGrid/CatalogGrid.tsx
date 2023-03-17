import React from 'react';
import styles from './CatalogGrid.module.scss';

import { ProductCard } from '../shared/ProductCard';

export const CatalogGrid: React.FC = () => {
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
