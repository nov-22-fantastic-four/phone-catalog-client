import React, { useEffect, useState } from 'react';
import { CatalogGrid } from '../CatalogGrid';
import { Container } from '../shared/Container';
import { type Product } from '../../types';
import { getWithPagination } from '../../api/phones';

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async(): Promise<void> => {
      const fetchedPhones = await getWithPagination(1, 16);

      setPhones(fetchedPhones);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h1>
        Mobile Phones
      </h1>

      <CatalogGrid products={phones} />
    </Container>
  );
};
