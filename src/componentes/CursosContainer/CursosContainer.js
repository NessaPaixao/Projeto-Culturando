import './CursosContainer.scss';
import React from 'react';


const CursosContainer = ({ img, titulo, texto, botao }) => {
    return (
        <div className="CaixaCursos">

            <div className="CursosDis">
                <img src={img} alt="" />
                <h2>{titulo}</h2>
                <p>{texto}</p>
                <button div="clicavel">{botao}</button>

                <div id="Risco"></div>

            </div>


        </div>


    )
}

export default CursosContainer;
