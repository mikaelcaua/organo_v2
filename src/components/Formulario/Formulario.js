import { useState } from 'react';
import Botao from './Botao/Botao';
import CampoSelect from './CampoSelect/CampoSelect';
import CampoTexto from './CampoTexto/CampoTexto';
import './Formulario.css'

const Formulario = ({times})=>{

    const [nome, setNome] = useState(' ');
    const [cargo, setCargo] = useState(' ');
    const [imagem, setImagem] = useState(' ');
    const [time, setTime] = useState(' ');

    const  aoEnviar=(event)=>{
        event.preventDefault();
        console.log(nome, cargo, imagem, time);
    }

    return(
        <div className='formulario' >
            <form onSubmit={aoEnviar}>

                <h2>Preencha os dados para criar o card do colaborador</h2>

                <CampoTexto 
                aoAlterar={(event)=>{setNome(event.target.value);}} 
                name="Nome"></CampoTexto>

                <CampoTexto
                aoAlterar={(event)=>{setCargo(event.target.value)}} 
                name="Cargo"></CampoTexto>

                <CampoTexto
                aoAlterar={(event)=>{setImagem(event.target.value)}} 
                name="Imagem"></CampoTexto>

                <CampoSelect aoAlterar={(event)=>{setTime(event.target.value)}} times={times.map(time=>time.nome) }></CampoSelect>

                <Botao>Criar Card</Botao>

            </form>
        </div>
    )
}

export default Formulario;