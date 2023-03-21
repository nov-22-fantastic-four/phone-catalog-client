import React from 'react';
import styles from './CatalogGrid.module.scss';

import { ProductCard } from '../shared';
import { type Product } from '../../types';

interface Props {
  products: Product[],
}

export const CatalogGrid: React.FC<Props> = ({ products }) => (
  <div className={styles.grid}>
    {products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        showFullPrice
      />
    ))}
  </div>
);
