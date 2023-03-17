import React from 'react';
import styles from './CatalogGrid.module.scss';

import { ProductCard } from '../shared/ProductCard';
import { type Product } from '../../types';

interface Props {
  products: Product[],
}

export const CatalogGrid: React.FC<Props> = ({ products }) => (
  <div className={styles.catalog}>
    {products.map((product) => (
      <div
        key={product.id}
        className={styles.catalog__item}
      >
        <ProductCard product={product} />
      </div>
    ))}
  </div>
);
