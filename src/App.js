import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar.js';
import Home from './componentes/Home/Home.js';
import Cadastro from './componentes/CadastroMaior/CadastroMaior.js';
import HorariosDosCursos from './componentes/DadosCursos/DadosCursos.js';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/Cursos" component={HorariosDosCursos} />
      
    </BrowserRouter>
  )
}
export default App;
