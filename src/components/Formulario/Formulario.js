import Botao from './Botao/Botao';
import CampoSelect from './CampoSelect/CampoSelect';
import CampoTexto from './CampoTexto/CampoTexto';
import './Formulario.css'

const Formulario = ({times})=>{
    
    return(
        <div className='formulario' >
            <form >

                <h2>Preencha os dados para criar o card do colaborador</h2>

                <CampoTexto name="Nome"></CampoTexto>

                <CampoTexto name="Cargo"></CampoTexto>

                <CampoTexto name="Imagem"></CampoTexto>

                <CampoSelect times={times.map(time=>time.nome) }></CampoSelect>

                <Botao aoEnviar={(event)=>{
                    event.preventDefault();
                    console.log('funcionou')
                }}></Botao>

            </form>
        </div>
    )
}

export default Formulario;