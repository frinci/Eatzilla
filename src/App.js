import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './screens/Header';
// import Home from './screens/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselContainer from '../src/screens/Carousel'
import './scss/custom.scss'
import FiguresOne from './screens/FiguresOne'
import FiguresTwo from './screens/FiguresTwo'
import DeliveryPartners from './screens/DeliveryPartners'
import Container from 'react-bootstrap/container';
import AboutText from './screens/AboutText'
import FiguresThree from './screens/FiguresThree'

function App() {
  return (
  <Container style={{margin: '0' ,padding: '0'}}>    
      <head>
      <link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet"/>
      </head>

      <Header/>
      <FiguresOne/>
      <FiguresThree/>
      <DeliveryPartners/>
      <CarouselContainer />
      <FiguresTwo/>
      <AboutText/>
    
  </Container>
    
  );
}

export default App;