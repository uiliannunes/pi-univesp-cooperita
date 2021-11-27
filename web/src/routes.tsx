import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import Pontos from './pages/Pontos';
import Cooperita from './pages/Cooperita';
import Materiais from './pages/Materiais';
import Contato from './pages/Contato';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreatePoint} path="/create-point" />
      <Route component={Pontos} path="/Pontos" />
      <Route component={Cooperita} path="/Cooperita" />
      <Route component={Materiais} path="/Materiais" />
      <Route component={Contato} path="/Contato" />
    </BrowserRouter>
  );
}

export default Routes;