import React from "react";
import './DadosCursos.scss';
import bale from '../../imagem/balé.png';
const DadosCursos = () => {

    return(
        <div className="Todos">
            <img src={bale} alt=""></img>
            <h1>Curso de Ballet</h1>
            <div className="requisitos">
                    <h2>TURMA 01</h2>
                    <p>Dia: Terça-feira</p>
                    <p>Horário: 14:00 às 15:00</p>
                    <p>Faixa etária: 3 a 6 anos/Baby</p>
                    <p>Local: CECIN</p>
                    <button>INSCREVA-SE</button>
                    
            </div>
            

        </div>
    )
}


export default DadosCursos;