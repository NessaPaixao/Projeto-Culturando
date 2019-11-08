import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar.js';
import Home from './componentes/Home/Home.js';
import Cadastro from './componentes/CadastroMaior/CadastroMaior.js';
import DadosBalé from './componentes/DadosCursos/DadosCursos.js';
import DadosPintura from './componentes/DadosCursos2/DadosCursos2.js';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/Cursos" component={DadosBalé} />
      <Route path="/Sobre-nós" component={DadosPintura} />
      
    </BrowserRouter>
  )
}
export default App;
