import React from 'react';
import { Container, PageTitle } from '../shared';
import { TopSlider } from '../shared/TopSlider';

export const HomePage: React.FC = () => {
  return (
    <Container>
      <PageTitle>
        Welcome!
      </PageTitle>
      <TopSlider />
    </Container>
  );
};
