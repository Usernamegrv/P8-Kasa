import React from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import Banner from './components/banner/Banner.jsx';
import './App.scss';
import GalleryAppartement from './components/GalleryAppartement/GalleryAppartement.jsx';

function App() {
  return (
    
    <div>
      <Navbar/>
      <Banner/>
      <GalleryAppartement/>

    </div>
  )
}

export default App
