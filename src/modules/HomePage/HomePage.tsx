import React, { useEffect, useState } from 'react';
import { Container, PageTitle } from '../shared';
import { ProductCarousel } from '../shared/ProductCarousel/ProductCarousel';
import { type Product } from '../../types';
import { getNew } from '../../api/products';
import { TopSlider } from '../shared/TopSlider';

import styles from './HomePage.module.scss';

export const HomePage: React.FC = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async(): Promise<void> => {
      const fetchedData = await getNew();

      setNewProducts(fetchedData);
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <PageTitle>
        Welcome!
      </PageTitle>

      <TopSlider />

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
          showFullPrice
        />
      </section>
    </Container>
  );
};
