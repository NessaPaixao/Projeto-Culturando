import React from 'react';
import './CursosD.scss';


const CursosD = ({img, titulo, texto }) => {
    return (
        <div className="CursosD">
        <img src={img} alt=""/>
        <h2>{titulo}</h2>
        <p>{texto}</p>
        <button>INSCREVA-SE</button>

        </div>
    )
  }
  export default CursosD;