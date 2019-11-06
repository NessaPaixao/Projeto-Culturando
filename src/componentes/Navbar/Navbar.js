import React, { useState } from "react";
import '../Nav/Navbar.scss';
import { Link } from 'react-router-dom';
import Culturando from '../../imagem/culura.png'


const Navbar = () => {
 
  return (
    <div className="Navbar">
      <nav>
        <div id="nome">
          <img src={Culturando} alt="Nome do projeto" />
        </div>
        
        <div onClick={abrirMenu} id="menu-hamburguer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;