import React, { useEffect, useState } from 'react';
import { CatalogGrid } from '../CatalogGrid';
import {
  Container,
  PageTitle,
  ItemCount,
  BreadCrumbs,
  ProductFilter,
  Pagination,
} from '../shared';
import { type Product } from '../../types';
import { getCount, getWithParams } from '../../api/products';
import { useSearchParams } from 'react-router-dom';

export const PhonesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [phones, setPhones] = useState<Product[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const perPage = searchParams.get('perPage') || 16;

  const hasPagination = perPage !== 'all';

  useEffect(() => {
    const fetchData = async(): Promise<void> => {
      // setIsLoading(true);

      const fetchedPhones = await getWithParams(searchParams);

      setPhones(fetchedPhones);
      // setIsLoading(false);
    };

    void fetchData();
  }, [searchParams]);

  useEffect(() => {
    const fetchItemCount = async(): Promise<void> => {
      const fetchedCount = await getCount();

      setTotalCount(fetchedCount);
    };

    void fetchItemCount();
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
      {hasPagination && <Pagination totalItems={totalCount} />}
    </Container>
  );
};
