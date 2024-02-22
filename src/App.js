import { useState } from 'react';
import Formulario from './components/Formulario';
import {Time} from './components/Time';
import {Banner} from './components/Banner';

function App() {
  const times = [
    {name:'Programação',
    secundarycolor:'#00C86F26',
    primarycolor:'#57C278'}
    ,
    {name:'Front-End',
    secundarycolor:'#E8FFFF',
    primarycolor:'#82CFFA'}
    ,
    {name:'Data Science',
    secundarycolor:'#E9FFE3',
    primarycolor:'#A6D157'}
    ,
    {name:'Devops',
    secundarycolor:'#F1616526',
    primarycolor:'#E06B69'}
  ]

  const [colaboradores, setColaboradores] = useState([

  ]);

  const adicionarColaboradores = (nome, cargo, imagem, time) => {
    if(time!='Selecione uma opção' && nome!='' && cargo!='' && imagem!=''){
      setColaboradores([...colaboradores, { time: time, url: imagem, name: nome, description: cargo }]);
    }
    
  };

  return (
    <>
      <Banner src="imagens/banner.png"></Banner>
      <Formulario times={times} onSubmit={adicionarColaboradores}></Formulario>
      {times.map((time)=>{
        return <Time key={time.name} colaboradores={colaboradores} name={time.name} primarycolor={time.primarycolor} secundarycolor={time.secundarycolor}></Time>
      })}
    
    </>
  );
}

export default App;
