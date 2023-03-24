import React from 'react';
import styles from './CatalogGrid.module.scss';

import { ProductCard } from '../shared';
import { type Product } from '../../types';
import cn from 'classnames';
import { sampleProducts } from './sample.products';

interface Props {
  products?: Product[],
  isLoading?: boolean,
}

export const CatalogGrid: React.FC<Props> = ({
  products = sampleProducts,
  isLoading = false,
}) => (
  <div
    className={cn(styles.grid, {
      [styles.loader]: isLoading,
    })}
  >
    {products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        showFullPrice
      />
    ))}
  </div>
);
