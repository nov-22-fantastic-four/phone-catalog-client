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
import { StubPageFavorite } from '../shared/StubPageFavorite';

export const FavoritesPage: React.FC = () => {
  const { favorites } = useContext(FavoritesContext);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const hasFavorites = favorites.length !== 0;

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

      {!hasFavorites
        ? (
          <StubPageFavorite />)
        : (
          <>
            <PageTitle>
              Favorites
            </PageTitle>
            <ItemCount>
              {`${favorites.length} items`}
            </ItemCount>

            {isLoading
              ? <Loader />
              : <CatalogGrid products={products} />}
          </>)}
    </Container>
  );
};
