import React, { useEffect, useState } from 'react';
import { Container, PageTitle } from '../shared';
import { ProductCarousel } from '../shared/ProductCarousel/ProductCarousel';
import { type Product } from '../../types';
import { getWithPagination } from '../../api/products';

import styles from './HomePage.module.scss';

export const HomePage: React.FC = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async(): Promise<void> => {
      const fetchedData = await getWithPagination(1, 8);

      setNewProducts(fetchedData);
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <PageTitle>
        Welcome!
      </PageTitle>

      <section className={styles.section}>
        <ProductCarousel
          title="Brand new models"
          products={newProducts}
        />
      </section>

      <section className={styles.section}>
        <ProductCarousel
          title="Hot prices"
          products={newProducts}
        />
      </section>
    </Container>
  );
};
