import React from 'react';
import './Section.scss';
import CursosD from '../CursosD/CursosD';
import bale from '../../imagem/balé.png';
import teatro from '../../imagem/teatro.png';
import canto from '../../imagem/canto.jpg';


const Section = () => {
    return (
        <div className="section" >

        <div className="bale">
            <CursosD img={bale} titulo="Curso de Ballet" texto="A dança clássica, também conhecida como ballet, é um tipo de dança que reúne uma série de técnicas e movimentos específicos." />
        </div>

        <div className="teatro">
            <CursosD img={teatro} titulo="Curso de Teatro" texto="Teatro é um termo de origem grega que designa simultaneamente o conjunto de peças dramáticas para apresentação em público e o edifício onde são apresentadas essas peças." />
        </div>
        <div className="canto" >
            <CursosD img={canto} titulo="Curso de Canto" texto="Canto é o ato de produzir sons musicais utilizando a voz, variando a altura de acordo com a melodia e o ritmo" />
        </div>

        </div>

        
    )
}
export default Section;