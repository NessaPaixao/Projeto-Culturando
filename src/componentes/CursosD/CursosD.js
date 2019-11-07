import React from 'react';
import './Cursos.scss';
import { Link } from 'react-router-dom';

const CursosD = ({img, titulo, texto, nome }) => {
    return (
        <div className="CursosD">
        <img src={img} alt=""/>
        <h2>{titulo}</h2>
        <p>{texto}</p>
        <Link to="/cadastro"><button>{nome}</button></Link>
        

        </div>
    )
  }
  export default CursosD;