import React, { createContext } from 'react';

import { useLocalStorage } from '../../hooks';

interface ContextType {
  favorites: number[],
  addFavorite: (productId: number) => void,
  removeFavorite: (productId: number) => void,
  isFavorite: (productId: number) => boolean,
}

const defaultValue: ContextType = {
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => false,
};

export const FavoritesContext = createContext(defaultValue);

interface Props {
  children: React.ReactNode,
}

export const FavoritesProvider: React.FC<Props> = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage<number[]>('favorites', []);

  const addFavorite = (productId: number): void => {
    setFavorites(current => [...current, productId]);
  };

  const removeFavorite = (productId: number): void => {
    setFavorites(current => (
      current.filter(id => id !== productId)
    ));
  };

  const isFavorite = (productId: number): boolean => (
    favorites.includes(productId)
  );

  const contextValue = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};
