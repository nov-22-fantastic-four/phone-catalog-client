import React, { useCallback, useState } from 'react';
import { type Product } from '../../../types';
import { ProductCard } from '../ProductCard';
import { ChevronLeftIcon, ChevronRightIcon } from '../../icons';

import styles from './ProductCarousel.module.scss';
import { sampleProducts } from './sample.products';
import cn from 'classnames';

interface Props {
  title: string,
  products?: Product[],
  showFullPrice?: boolean,
  isLoading?: boolean,
}

export const ProductCarousel: React.FC<Props> = ({
  title,
  products = sampleProducts,
  showFullPrice = false,
  isLoading = false,
}) => {
  const [position, setPosition] = useState(0);

  const isBackDisabled = position === 0;
  const isNextDisabled = position === products.length - 1;

  const shift = (-304 * position);

  const moveForward = useCallback(() => {
    setPosition(current => current + 1);
  }, []);

  const moveBack = useCallback(() => {
    setPosition(current => current - 1);
  }, []);

  return (
    <div>
      <div className={styles.top}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.actions}>
          <button
            className={styles.button}
            disabled={isBackDisabled}
            onClick={moveBack}
          >
            <ChevronLeftIcon className={styles.icon} />
          </button>

          <button
            className={styles.button}
            disabled={isNextDisabled}
            onClick={moveForward}
          >
            <ChevronRightIcon className={styles.icon} />
          </button>
        </div>
      </div>

      <div
        className={cn(styles.carousel, {
          [styles.loader]: isLoading,
        })}
      >
        <div
          className={styles.list}
          style={{
            transform: `translateX(${shift}px)`,
          }}
        >
          {products.map(product => (
            <div key={product.id} className={styles.item}>
              <ProductCard
                product={product}
                showFullPrice={showFullPrice}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
