import React from "react";
import './DadosCursos2.scss';
import pintura from '../../imagem/pintura.jpeg';


const DadosCursos2 = () => {

    return(
        <div className="Todos">
            <img src={pintura} alt=""></img>
            <h1>Curso de Ballet</h1>
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
            

        </div>
    )
}


export default DadosCursos2;
