import React from 'react';
import { useLocation } from 'react-router';
import { CatalogGrid } from '../CatalogGrid';
import { BreadCrumbs } from '../shared/BreadCrumbs';
import { Container } from '../shared/Container';
import styles from './FavoritesPage.module.scss';

export const FavoritesPage: React.FC = () => {
  const locationPathName = useLocation().pathname;

  return (
    <Container>
      <BreadCrumbs locationPathName={locationPathName}/>
      <h1 className={styles.title}>Favourites</h1>
      <p>5 items</p>
      <CatalogGrid />
    </Container>
  );
};
