import React from 'react';
import { CatalogGrid } from '../CatalogGrid';
import { Container } from '../shared/Container';

export const PhonesPage: React.FC = () => {
  return (
    <Container>
      <h1>
        Phones Page
      </h1>

      <CatalogGrid />
    </Container>
  );
};
