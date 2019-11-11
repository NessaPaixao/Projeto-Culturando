import React from 'react';
import './Popup.scss';
import { Link } from 'react-router-dom';

const Popup = () => {

    return ( 
        <div className="fundo">
            <div className="popup">
                    <h1>Você foi cadastrado com sucesso!</h1>
                  <Link to="/"><button>OK</button></Link>  
            </div>
        </div>

    
    )
}
export default Popup;