import './Botao.css'

const Botao = (props)=>{
    return(
        <div className='botao'>
            <button onClick={props.aoEnviar}>{props.children}</button>
        </div>
    )
}

export default Botao;