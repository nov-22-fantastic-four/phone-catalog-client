import React, { useEffect, useState } from 'react';
import { CatalogGrid } from '../CatalogGrid';
import { Container, PageTitle, ItemCount, BreadCrumbs } from '../shared';
import { type Product } from '../../types';
import { getCount, getWithPagination } from '../../api/products';

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchData = async(): Promise<void> => {
      const fetchedPhones = await getWithPagination(1, 16);

      setPhones(fetchedPhones);
    };

    const fetchItemCount = async(): Promise<void> => {
      const fetchedCount = await getCount();

      setTotalCount(fetchedCount);
    };

    fetchData();
    fetchItemCount();
  }, []);

  return (
    <Container>
      <BreadCrumbs />

      <PageTitle>
        Mobile Phones
      </PageTitle>

      <ItemCount>
        {`${totalCount} models`}
      </ItemCount>

      <CatalogGrid products={phones} />
    </Container>
  );
};
