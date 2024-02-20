import './Botao.css'

const Botao = ({aoEnviar})=>{
    return(
        <div className='botao'>
            <button onClick={aoEnviar}>Criar Card</button>
        </div>
    )
}

export default Botao;