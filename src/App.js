import React from 'react';
import styled ,{createGlobalStyle} from 'styled-components';
import { BrowserRouter , Route , Switch} from 'react-router-dom';
import MainView from './views/MainView';
import ProductView from './views/DetailPage';
import SearchView from './views/SearchView';

import DetailPage from './views/DetailPage';
import category from './components/category';
import Graph from './views/Graph'

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
        color:white;
    }
`;

const App = () => (
  <BrowserRouter>
  <GlobalStyle/>
    <Switch>
      <Route path="/" exact component={MainView} />
      <Route path="/search" exact component={SearchView} /> 
      <Route path="/product" exact component={ProductView} />
      <Route path="/product/:productId" exact component={DetailPage} />
      
      <Route path="/category" exact component={category} />
    </Switch>
  </BrowserRouter>
);

export default App;