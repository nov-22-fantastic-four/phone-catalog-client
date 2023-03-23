import React, { useContext } from 'react';
import classNames from 'classnames';
import { CartContext } from '../../../context';
import { ItemCount } from '../ItemCount';
import styles from './CheckOutModal.module.scss';

interface Props {
  totalCost: number
  showModal: (isModal: boolean) => void;
}

export const CheckOutModal: React.FC<Props> = ({ totalCost, showModal }) => {
  const { removeAll, cartItems } = useContext(CartContext);
  const totalItem = cartItems.reduce((total, item) => total + item.count, 0);

  const submitPurchase = (event: React.FormEvent): void => {
    event.preventDefault();
    clearCart();
  };

  const clearCart = (): void => {
    removeAll();
    showModal(false);
  };

  const closeModal = (): void => {
    showModal(false);
  };

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div
        className={styles.modalContent}
        onClick={
          (event) => {
            event.stopPropagation();
          }}
      >
        <h3 className={styles.modalTitle}>Checkout</h3>
        <div className={styles.modalBody}>
          <p className={styles.price}>
            {totalCost}
          </p>

          <ItemCount>
            {`Total for ${totalItem} items`}
          </ItemCount>

          <div className={styles.line}/>
        </div>
        <div className={styles.modalButtons}>
          <form
            action="#"
            method="get"
            onSubmit={submitPurchase}
            className={styles.form}
          >
            <input
              type="text"
              placeholder="Name"
              className={styles.input}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              required
            />
            <button type='submit' className={
              classNames(styles.modalButton, styles.confirm)}
            >
            Confirm
            </button>
          </form>

          <button className={
            classNames(styles.modalButton, styles.cancel)}
          onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
