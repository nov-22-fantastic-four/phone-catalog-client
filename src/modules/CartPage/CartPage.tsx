import React, { useContext, useEffect, useState } from 'react';
import { getById } from '../../api/products';
import { CartContext } from '../../context';
import { type Product } from '../../types';
import { ItemCount, PageTitle, Container, BackButton } from '../shared';
import { CartItem } from '../shared/CartItem';
import { TotalCost } from '../shared/TotalCost';
import styles from './CartPage.module.scss';

export const CartPage: React.FC = () => {
  const { cartItems, getCount } = useContext(CartContext);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async(): Promise<void> => {
      const fetchedProducts = await Promise.all(
        cartItems.map(item => getById(item.id))
      );

      setProducts(fetchedProducts);
    };

    fetchData();
  }, [cartItems]);

  const totalCost = products.reduce(
    (total, product) => total + product.price * getCount(product.id), 0
  );

  return (
    <Container>
      <BackButton />

      <PageTitle>
        Cart
      </PageTitle>

      <ItemCount>
        {`${cartItems.length} items`}
      </ItemCount>
      {cartItems.length && <div className={styles.box}>
        {products.map(product => (
          <CartItem
            key={product.id}
            product={product}
            count={getCount(product.id)}
          />
        ))}
        <TotalCost totalCost={totalCost} />
      </div>}
    </Container>
  );
};
