import React from 'react';
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return <nav className="navbar" >
    <div className="navbar_logo">
        <img src="LOGO.svg" alt="Logo Kasa" />
    </div>
    <Link to="/Home">Accueil</Link>
    <Link to="/Apropos"><div>A propos</div></Link>
  </nav>
  
  
}

export default Header