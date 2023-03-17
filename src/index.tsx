import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { CartProvider, FavoritesProvider } from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <FavoritesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FavoritesProvider>
    </Router>
  </React.StrictMode>
);
