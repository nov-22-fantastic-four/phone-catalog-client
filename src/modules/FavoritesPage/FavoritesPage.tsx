import React, { useContext, useEffect, useState } from 'react';
import { CatalogGrid } from '../CatalogGrid';
import { BreadCrumbs, Container, PageTitle, ItemCount } from '../shared';
import { FavoritesContext } from '../../context';
import { type Product } from '../../types';
import { getById } from '../../api/products';

export const FavoritesPage: React.FC = () => {
  const { favorites } = useContext(FavoritesContext);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async(): Promise<void> => {
      const fetchedProducts = await Promise.all(
        favorites.map(id => getById(id))
      );

      setProducts(fetchedProducts);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <BreadCrumbs />

      <PageTitle>
        Favorites
      </PageTitle>

      <ItemCount>
        {`${favorites.length} items`}
      </ItemCount>

      <CatalogGrid products={products} />
    </Container>
  );
};
