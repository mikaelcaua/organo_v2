import CampoTexto from './CampoTexto/CampoTexto';
import './Formulario.css'

const Formulario = ()=>{
    return(
        <div className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto name="Nome"></CampoTexto>
                <CampoTexto name="Cargo"></CampoTexto>
                <CampoTexto name="Imagem"></CampoTexto>
                
            </form>
        </div>
    )
}

export default Formulario;