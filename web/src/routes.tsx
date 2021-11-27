import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import Pontos from './pages/Pontos';
import Cooperita from './pages/Cooperita';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreatePoint} path="/create-point" />
      <Route component={Pontos} path="/Pontos" />
      <Route component={Cooperita} path="/Cooperita" />
    </BrowserRouter>
  );
}

export default Routes;