import React from "react";
import './DadosCursos.scss';
import bale from '../../imagem/balé.png';
import Popup from '../Popup/Popup.js'
const DadosCursos = () => {
    
    return(
        <div className="Todos">
            <img src={bale} alt=""></img>
            <h1>Ballet</h1>
            <div className="requisitos">
                    <h2>TURMA 01</h2>
                    <p>Dia: Terça-feira</p>
                    <p>Horário: 14:00 às 15:00</p>
                    <p>Faixa etária: 3 a 6 anos/Baby</p>
                    <p>Local: CECIN</p>
                    <button>INSCREVA-SE</button>
                    <div className="Linha"></div>
                    <h2>TURMA 02</h2>
                    <p>Dia: Quinta-feira</p>
                    <p>Horário: 14:00 às 15:00</p>
                    <p>Faixa etária: 12 a 17 anos/Juvenil</p>
                    <p>Local: CECIN</p>
                    <button>INSCREVA-SE</button> 
            
                    
            </div>
            <Popup/>

        </div>
    )
}


export default DadosCursos;