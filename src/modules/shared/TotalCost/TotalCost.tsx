import React, { useContext } from 'react';
import { CartContext } from '../../../context';
import { ItemCount } from '../ItemCount';
import styles from './TotalCost.module.scss';

interface Props {
  totalCost: number
  showModal: (isModal: boolean) => void
}

export const TotalCost: React.FC<Props> = ({ totalCost, showModal }) => {
  const { cartItems } = useContext(CartContext);

  const totalItem = cartItems.reduce((total, item) => total + item.count, 0);

  const openModal = (): void => {
    showModal(true);
  };

  return (
    <div className={styles.total}>
      <p className={styles.price}>
        {totalCost}
      </p>

      <ItemCount>
        {`Total for ${totalItem} items`}
      </ItemCount>

      <div className={styles.line}/>

      <button
        className={styles.button}
        onClick={openModal}
      >
        Checkout
      </button>
    </div>
  );
};
