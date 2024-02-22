import './Formulario.css'

import React, { InputHTMLAttributes, useState } from 'react';

import {CampoSelect} from './CampoSelect';
import {CampoTexto} from './CampoTexto';
import { Botao } from './Botao';

interface FormularioProps{
    times:{name:string;
           secundarycolor:string
           primarycolor:string}[]
    onSubmit: (nome:string, cargo:string, imagem:string, time:string)=>void
}

const Formulario = ({times ,onSubmit}:FormularioProps)=>{

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoEnviar = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(nome, cargo, imagem, time);
    };

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

                <CampoSelect aoAlterar={(event:any)=>{setTime(event.target.value)}} timesnomes={times.map(time=>time.name) }></CampoSelect>

                <Botao >Criar Card</Botao>

            </form >
        </div>
    )
}

export default Formulario;