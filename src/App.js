import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';


function App() {
  return (
    <div>
      <Route exact path= '/' component = {HomePage} />
      <Route path= '/shop' component = {ShopPage} />

    </div>
  );
}

export default App;
