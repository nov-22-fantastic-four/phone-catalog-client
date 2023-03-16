import React from 'react';
import { Container } from '../shared/Container';
import { ProductCard } from '../shared/ProductCard';

export const PhonesPage: React.FC = () => {
  return (
    <Container>
      <h1>
        Phones Page
      </h1>

      <ProductCard />
    </Container>
  );
};
