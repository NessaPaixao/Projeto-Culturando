import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar.js';
import Home from './componentes/Home/Home.js';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      
      
    </BrowserRouter>
  )
}
export default App;
