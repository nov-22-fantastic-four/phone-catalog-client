import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { Header } from './modules/shared/Header';
import { HomePage } from './modules/HomePage';
import { PhonesPage } from './modules/PhonesPage';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="/phones" element={<PhonesPage />} />

        {/*  <Route path="/phones"> */}
        {/*    */}
        {/*    <Route path=":itemId" element={<ProductPage />} /> */}
        {/*  </Route> */}

        {/*  <Route path="/tablets" element={<TabletsPage />} /> */}
        {/*  <Route path="/accessories" element={<AccessoriesPage />} /> */}
        {/*  <Route path="/cart" element={<CartPage />} /> */}
        {/*  <Route path="/favorites" element={<FavoritesPage />} /> */}

        {/*  <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
};

export default App;
