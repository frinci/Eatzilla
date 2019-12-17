import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './screens/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselContainer from '../src/screens/Carousel'

function App() {
  return (
    <div className="App">
      <CarouselContainer />
    </div>
  );
}

export default App;
