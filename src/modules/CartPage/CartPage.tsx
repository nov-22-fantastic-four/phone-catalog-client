import React, { useContext, useEffect, useState } from 'react';
import { getById } from '../../api/products';
import { CartContext } from '../../context';
import { type Product } from '../../types';
import {
  PageTitle,
  ItemCount,
  Container,
  BackButton,
  Loader,
} from '../shared';
import { CartItem } from '../shared/CartItem';
import { TotalCost } from '../shared/TotalCost';
import styles from './CartPage.module.scss';
import { CheckOutModal } from '../shared/CheckOutModal';
import { StubPageCart } from '../shared/StubPageCart';

export const CartPage: React.FC = () => {
  const { cartItems, getCount } = useContext(CartContext);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const noItems = cartItems.length === 0;

  const totalItem = cartItems.reduce((total, item) => total + item.count, 0);

  useEffect(() => {
    const fetchData = async(): Promise<void> => {
      const fetchedProducts = await Promise.all(
        cartItems.map(item => getById(item.id))
      );

      setProducts(fetchedProducts);
      setIsLoading(false);
    };

    void fetchData();
  }, [cartItems]);

  const totalCost = products.reduce(
    (total, product) => total + product.price * getCount(product.id), 0
  );

  return (
    <Container>
      <BackButton />

      {!noItems &&
        <>
          <PageTitle>
              Cart
          </PageTitle>
          <ItemCount>
            {`${totalItem} items`}
          </ItemCount>
        </>
      }

      {noItems && <StubPageCart /> }

      {isLoading
        ? <Loader />
        : (
          <div className={styles.container}>
            {!!cartItems.length && (
              <>
                <div className={styles.items}>
                  {products.map(product => {
                    const count = getCount(product.id);

                    if (!count) {
                      return null;
                    }

                    return (
                      <CartItem
                        key={product.id}
                        product={product}
                        count={count}
                      />
                    );
                  })}
                </div>
                <TotalCost totalCost={totalCost} showModal={setIsModalOpen}/>
              </>
            )}
          </div>)}

      {
        isModalOpen &&
        <CheckOutModal totalCost={totalCost} showModal={setIsModalOpen}/>
      }
    </Container>
  );
};
