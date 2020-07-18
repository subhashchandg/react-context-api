import React, { useState } from 'react';
import './App.scss';
import Header from './components/header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/routes';
import { ProductContextProvider } from './components/product-context';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Router>
          <Header />
          <Routes />
        </Router>
      </ProductContextProvider>
    </div>
  );
}

export default App;
