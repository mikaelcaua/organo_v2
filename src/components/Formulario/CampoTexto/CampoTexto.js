import './CampoTexto.css'

const CampoTexto = ({name, aoAlterar})=>{
    return(
        <div className='campotexto'>
            <label>{name}</label>
            <input required placeholder={'Insira seu '+name.toLowerCase()+'...'} onChange={aoAlterar}></input>
        </div>
    )
}

export default CampoTexto;