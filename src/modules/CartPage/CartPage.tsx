import React, { useContext } from 'react';
import { CartContext } from '../../context';
import { CatalogGrid } from '../CatalogGrid';
import { ItemCount, PageTitle, Container, BackButton } from '../shared';

export const CartPage: React.FC = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Container>
      <BackButton />

      <PageTitle>
        Cart
      </PageTitle>

      <ItemCount>
        {`${cartItems.length} items`}
      </ItemCount>

      <CatalogGrid products={[]} />
    </Container>
  );
};
