import React from 'react';
import styled ,{createGlobalStyle} from 'styled-components';
import { BrowserRouter , Route , Switch} from 'react-router-dom';
import MainView from './views/MainView';
import ProductView from './views/DetailPage';
import SearchView from './views/SearchView';

import t1 from './views/MainPage';
import t2 from './views/ListPage';
import t3 from './views/DetailPage';


const GlobalStyle = createGlobalStyle`
    @import url("../font/NanumSquare/nanumsquare.css");
    html {
        margin: 0 auto;
        background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
        background-repeat:no-repeat;
        background-size : auto;
        height:100%;
        width : 100%;
        text-align : center;
    }
    body {
        font-family: 'NanumSquare', sans-serif;
        
    }
`;

const App = () => (
  <BrowserRouter>
  <GlobalStyle/>
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