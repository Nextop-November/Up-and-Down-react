import React from 'react';

import { BrowserRouter , Route , Switch} from 'react-router-dom';
import MainView from './views/MainView';
import ProductView from './views/DetailPage';
import SearchView from './views/SearchView';

import t1 from './views/MainPage';
import t2 from './views/ListPage';
import t3 from './views/DetailPage';


const App = () => (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainView} />
          <Route path="/search" exact component={SearchView} />
          <Route path="/product" exact component={ProductView} />
          <Route path="/t1" exact component={t1} />
          <Route path="/t2" exact component={t2} />
          <Route path="/t3" exact component={t3} />
        </Switch>
      </BrowserRouter>
);

export default App;