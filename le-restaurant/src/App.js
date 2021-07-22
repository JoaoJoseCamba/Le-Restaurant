import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './Components/Hero/index'
import Products from './Components/Products/index'
import { productData, productDataTwo } from './Components/Products/data'
import Feature from './Components/Feature/index'
import Footer from './Components/Footer/index'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
