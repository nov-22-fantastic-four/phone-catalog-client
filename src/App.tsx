import React from 'react';
import './App.scss';
import { Header } from './modules/shared/Header/Header';
import { Container } from './modules/shared/Container';
import { Grid } from './modules/shared/Grid';

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <Grid>
          <Header />
        </Grid>
      </Container>
    </div>
  );
};

export default App;
