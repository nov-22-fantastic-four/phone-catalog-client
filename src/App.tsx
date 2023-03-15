import React from 'react';
import './App.scss';
import { Header } from './modules/shared/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
};

export default App;
