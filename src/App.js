
import './App.css';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';

function App() {
  const times = [
    {nome:'teste'}
  ]

  return (
    <>
      <Banner src="imagens/banner.png"></Banner>
      <Formulario times={times}></Formulario>
    </>
  );
}

export default App;
