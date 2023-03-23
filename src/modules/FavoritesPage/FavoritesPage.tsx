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
import { Link } from 'react-router-dom';
import emptyFavorites from '../../images/emty-fv-image.png';
import styles from './FavoritesPage.module.scss';

export const FavoritesPage: React.FC = () => {
  const { favorites } = useContext(FavoritesContext);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const noItems = favorites.length === 0;

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
        {noItems
          ? 'No favorites yet!'
          : 'Favorites'
        }
      </PageTitle>

      {!noItems &&
      <ItemCount>
        {`${favorites.length} items`}
      </ItemCount>
      }

      {noItems &&
      <div className={styles.emptyBox}>
        <img
          src={emptyFavorites}
          alt="favorites is empty"
          className={styles.emptyCartImg}
        />
        <Link to='/' className={styles.button}>
        Go To Homepage
        </Link>
      </div>}

      {isLoading
        ? <Loader />
        : <CatalogGrid products={products} />}
    </Container>
  );
};
