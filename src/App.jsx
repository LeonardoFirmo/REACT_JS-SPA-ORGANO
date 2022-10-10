import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';

function App() {

  const times = [
    {
      nome:'Programação',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Front-End',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Data science',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'Devops',
      corPrimaria:'#E06869',
      corSecundaria:'#FDE7E8'
    },
    {
      nome:'UX Design',
      corPrimaria:'#D86E8F',
      corSecundaria:'#FAE9E5'
    },
    {
      nome:'Mobile',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF'
    }
  ]

  const [colaboradores,SetColaboradores] = useState([])

  const aoNovoColaboradorAdd = colaborador =>{
    SetColaboradores([...colaboradores, colaborador])
 
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Formulario  times={times.map(time => time.nome )} aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdd(colaborador)}/>
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

     
      
 
    </div>
  );
}

export default App;
