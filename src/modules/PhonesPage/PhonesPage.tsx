import React, { useEffect, useState } from 'react';
import { CatalogGrid } from '../CatalogGrid';
import {
  Container,
  PageTitle,
  ItemCount,
  BreadCrumbs,
  ProductFilter, Pagination,
} from '../shared';
import { type Product } from '../../types';
import { getCount, getWithPagination } from '../../api/products';
import { useSearchParams } from 'react-router-dom';

export const PhonesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [phones, setPhones] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  const page = searchParams.get('page') || 1;
  const perPage = searchParams.get('perPage') || 16;

  const hasPagination = perPage !== 'all';

  useEffect(() => {
    const fetchData = async(): Promise<void> => {
      const fetchedPhones = await getWithPagination(+page, +perPage);

      setPhones(fetchedPhones);
    };

    fetchData();
  }, [searchParams]);

  useEffect(() => {
    const fetchItemCount = async(): Promise<void> => {
      const fetchedCount = await getCount();

      setTotalCount(fetchedCount);
    };

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

      <ProductFilter />

      <CatalogGrid products={phones} />

      {hasPagination && <Pagination totalItems={totalCount} /> }
    </Container>
  );
};
