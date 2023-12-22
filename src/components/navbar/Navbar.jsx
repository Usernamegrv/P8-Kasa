import React from 'react';
import "./Navbar.scss";

function Navbar() {
  return <nav className="navbar" >
    <div className="navbar_logo">
        <img src="LOGO.svg" alt="Logo Kasa" />
    </div>
    <div>Accueil</div>
    <div>A propos</div>
  </nav>
  
  
}

export default Navbar