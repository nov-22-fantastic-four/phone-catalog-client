import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { CatalogGrid } from '../CatalogGrid';
import {
  BreadCrumbs,
  Container,
  PageTitle,
  ItemCount,
  Loader,
} from '../shared';
import { FavoritesContext } from '../../context';
import { type Product } from '../../types';
import { getById } from '../../api/products';

export const FavoritesPage: React.FC = () => {
  const { favorites } = useContext(FavoritesContext);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async(): Promise<void> => {
      const fetchedProducts = await Promise.all(
        favorites.map(id => getById(id))
      );

      setProducts(fetchedProducts);
      setIsLoading(false);
    };

    void fetchData();
  }, [favorites]);

  return (
    <Container>
      <BreadCrumbs />

      <PageTitle>
        Favorites
      </PageTitle>

      <ItemCount>
        {`${favorites.length} items`}
      </ItemCount>

      {isLoading
        ? <Loader />
        : <CatalogGrid products={products} />}
    </Container>
  );
};
