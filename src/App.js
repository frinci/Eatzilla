import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Home from './screens/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselContainer from '../src/screens/Carousel'
import Figures from '../src/screens/Figures'

function App() {
  return (
    <div className="App">
      <Figures/>
      <CarouselContainer />
    </div>
  );
}

export default App;
