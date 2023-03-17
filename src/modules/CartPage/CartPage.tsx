import React, { useContext } from 'react';
import { CartContext } from '../../context';
import { Container } from '../shared/Container';
import { BreadCrumbs } from '../shared/BreadCrumbs';
import styles from './CartPage.module.scss';
import { CatalogGrid } from '../CatalogGrid';

export const CartPage: React.FC = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Container>
      <BreadCrumbs />

      <h1 className={styles.title}>Cart</h1>

      <p>
        {`${cartItems.length} items`}
      </p>

      <CatalogGrid products={[]} />
    </Container>
  );
};
