import React, { useContext } from 'react';
import { CatalogGrid } from '../CatalogGrid';
import { BreadCrumbs } from '../shared/BreadCrumbs';
import { Container } from '../shared/Container';
import styles from './FavoritesPage.module.scss';
import { FavoritesContext } from '../../context';

export const FavoritesPage: React.FC = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Container>
      <BreadCrumbs />

      <h1 className={styles.title}>Favourites</h1>

      <p>
        {`${favorites.length} items`}
      </p>

      <CatalogGrid products={[]} />
    </Container>
  );
};
