import React from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import Banner from './components/banner/Banner.jsx';
import './App.scss';
import GalleryAppartement from './components/GalleryAppartement/GalleryAppartement.jsx';
import Container from './components/container/Container.jsx';

function App() {
  return (
    
    <div>
      <Navbar/>
      <Container> 
      <Banner/>
      <GalleryAppartement/>
      </Container>

    </div>
  )
}

export default App
