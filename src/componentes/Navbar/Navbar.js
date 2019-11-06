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
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
        <Link onClick={fecharMenu} to="/">Home</Link>
        <Link onClick={fecharMenu} to="/Cursos">Cursos</Link>
        <Link onClick={fecharMenu} to="/Sobre-nós">Sobre nós</Link>
        <Link onClick={fecharMenu} to="/cadastro">Cadastro</Link>
      </section>
    </div>
  );
};
export default Navbar;