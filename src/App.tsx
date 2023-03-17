import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { Header } from './modules/shared/Header';
import { HomePage } from './modules/HomePage';
import { PhonesPage } from './modules/PhonesPage';
import { NotFoundPage } from './modules/NotFoundPage';
import { ProductPage } from './modules/ProductPage';
// import { Footer } from './modules/shared/Footer';

import './App.scss';
import { FavoritesPage } from './modules/FavoritesPage';
import { CartPage } from './modules/CartPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage /> } />
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="/phones" >
            <Route index element={<PhonesPage /> } />
            <Route path=":phoneId" element={<ProductPage /> } />
          </Route>

          <Route path="/favorites" element={<FavoritesPage /> } />
          <Route path="/cart" element={<CartPage /> } />

          <Route path="*" element={<NotFoundPage /> } />
        </Routes>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
