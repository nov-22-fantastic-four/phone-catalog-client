import React from 'react';
import { ProductCards } from '../ProductCards';
import { Container } from '../shared/Container';

export const PhonesPage: React.FC = () => {
  return (
    <Container>
      <h1>
        Phones Page
      </h1>

      <ProductCards />
    </Container>
  );
};
