import React, { useEffect, useState } from 'react';
import { Container, PageTitle } from '../shared';
import { ProductCarousel } from '../shared/ProductCarousel/ProductCarousel';
import { type Product } from '../../types';
import { getDiscount, getNew } from '../../api/products';
import { TopSlider } from '../shared/TopSlider';
import { CategoryCard } from '../shared/CategoryCard';

import styles from './HomePage.module.scss';

export const HomePage: React.FC = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [hotProducts, setHotProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchNew = async(): Promise<void> => {
      const fetchedData = await getNew();

      setNewProducts(fetchedData);
    };

    const fetchDiscount = async(): Promise<void> => {
      const fetchedData = await getDiscount();

      setHotProducts(fetchedData);
    };

    void fetchNew();
    void fetchDiscount();
  }, []);

  return (
    <Container>
      <PageTitle>
        Welcome to the world of Nice Gadgets!
      </PageTitle>

      <TopSlider />

      <section className={styles.section}>
        <ProductCarousel
          title="Brand new models"
          products={newProducts}
        />
      </section>

      <section className={styles.section}>
        <CategoryCard />
      </section>

      <section className={styles.section}>
        <ProductCarousel
          title="Hot prices"
          products={hotProducts}
          showFullPrice
        />
      </section>
    </Container>
  );
};
