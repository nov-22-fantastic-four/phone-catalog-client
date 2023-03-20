import React, { useContext } from 'react';
import { CartContext } from '../../../context';
import { ItemCount } from '../ItemCount';
import styles from './TotalCost.module.scss';

interface Props {
  totalCost: number
}

export const TotalCost: React.FC<Props> = ({ totalCost }) => {
  const { cartItems } = useContext(CartContext);

  const totalItem = cartItems.reduce((total, item) => total + item.count, 0);

  return (
    <div className={styles.total}>
      <p className={styles.price}>
        {totalCost}
      </p>

      <ItemCount>
        {`Total for ${totalItem} items`}
      </ItemCount>

      <div className={styles.line}/>

      <button className={styles.button}>
        Checkout
      </button>
    </div>
  );
};
