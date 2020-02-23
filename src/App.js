import React from 'react';
import { BrowserRouter , Route ,Switch } from 'react-router-dom';
import MainView from './views/MainView';
import SearchView from './views/SearchView'
import ProductView from './views/ProductView';

const App = () => (
  <BrowserRouter>
  <Switch>
    <Route path="/" exact component={MainView} />
    <Route path="/search" exact component={SearchView} />
    <Route path="/product" exact component={ProductView} />
  </Switch>
  </BrowserRouter>
);

export default App;
