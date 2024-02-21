

import Banner from './components/Banner/Banner';
import Colaborador from './components/Colaborador/Colaborador';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';

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

  const colaboradores = [
    {time:'Programação',
     url:'imagens/banner.png',
     name:'1',
     description:'teste1'}
     ,
     {time:'Data Science',
      url:'imagens/banner.png',
      name:'2',
      description:'teste2'}
  ]

  return (
    <>
      <Banner src="imagens/banner.png"></Banner>
      <Formulario times={times}></Formulario>
      {times.map((time)=>{
        return <Time key={time.name} colaboradores={colaboradores} name={time.name} primarycolor={time.primarycolor} secundarycolor={time.secundarycolor}></Time>
      })}
    
    </>
  );
}

export default App;
