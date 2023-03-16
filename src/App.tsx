import React from 'react';
import { Route, Routes } from 'react-router';
import './App.scss';
import { Header } from './modules/shared/Header';
import { HomePage } from './modules/HomePage';
import { PhonesPage } from './modules/PhonesPage';
import { NotFoundPage } from './modules/NotFoundPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage /> } />

        <Route path="/phones" element={<PhonesPage /> } />

        <Route path="*" element={<NotFoundPage /> } />
      </Routes>
    </div>
  );
};

export default App;
