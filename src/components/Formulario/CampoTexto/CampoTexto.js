import './CampoTexto.css'

const CampoTexto = ({name})=>{
    return(
        <div className='campotexto'>
            <label>{name}</label>
            <input placeholder={'Insira seu '+name.toLowerCase()+'...'}></input>
        </div>
    )
}

export default CampoTexto;