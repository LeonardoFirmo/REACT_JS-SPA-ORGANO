import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';

function App() {
  const [colaboradores,SetColaboradores] = useState([])

  const aoNovoColaboradorAdd = colaborador =>{
    console.log(colaborador);
    SetColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Formulario  aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdd(colaborador)}/>
    
 
    </div>
  );
}

export default App;
