import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './globalStyles';
import Hero from './Components/Hero'; 


function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
    </Router>
  );
}

export default App;

//Here we are using some of our style components. 