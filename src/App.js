import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Home from './screens/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselContainer from '../src/screens/Carousel'
import './scss/custom.scss'
import FiguresOne from './screens/FiguresOne'
import FiguresTwo from './screens/FiguresTwo'

function App() {
  return (
    <div className="App">
      <head>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,800&display=swap" rel="stylesheet"/>
      </head>
      <FiguresOne/>
      <CarouselContainer />
      <FiguresTwo/>
    </div>
  );
}

export default App;
