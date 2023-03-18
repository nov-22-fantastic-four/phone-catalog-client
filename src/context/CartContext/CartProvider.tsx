import React, { createContext } from 'react';
import { useLocalStorage } from '../../hooks';

interface CartItem {
  id: number,
  count: number,
}

interface ContextType {
  cartItems: CartItem[],
  addOne: (productId: number) => void,
  removeOne: (productId: number) => void,
  isAdded: (productId: number) => boolean,
  getCount: (productId: number) => number,
  removeItem: (productId: number) => void,
}

const defaultValue: ContextType = {
  cartItems: [],
  addOne: () => {},
  removeOne: () => {},
  isAdded: () => false,
  getCount: () => 0,
  removeItem: () => {},
};

export const CartContext = createContext<ContextType>(defaultValue);

interface Props {
  children: React.ReactNode,
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart', []);

  const addOne = (productId: number): void => {
    setCartItems(currentItems => {
      let cartItem = currentItems.find(({ id }) => id === productId);

      if (!cartItem) {
        cartItem = { id: productId, count: 1 };

        return [...currentItems, cartItem];
      }

      cartItem.count++;

      return [...currentItems];
    });
  };

  const removeOne = (productId: number): void => {
    setCartItems(currentItems => {
      const cartItem = currentItems.find(({ id }) => id === productId);

      if (!cartItem) {
        return [...currentItems];
      }

      cartItem.count--;

      if (cartItem.count <= 0) {
        return currentItems.filter(({ id }) => id !== productId);
      }

      return [...currentItems];
    });
  };

  const getCount = (productId: number): number => {
    return cartItems.find(item => item.id === productId)?.count ?? 0;
  };

  const removeItem = (productId: number): void => {
    setCartItems((currentItems) => {
      return currentItems.filter(item => item.id !== productId);
    });
  };

  const isAdded = (productId: number): boolean => (
    cartItems.some(({ id }) => id === productId)
  );

  const contextValue = {
    cartItems,
    addOne,
    removeOne,
    isAdded,
    getCount,
    removeItem,
  };

  return (
    <CartContext.Provider value={contextValue} >
      {children}
    </CartContext.Provider>
  );
};
