import './CampoTexto.css'

const CampoTexto = ({name})=>{
    return(
        <div className='campotexto'>
            <label>{name}</label>
            <input placeholder={'Insira seu '+name.toLowerCase()+'...'} onChange={event => console.log(event.target.value)}></input>
        </div>
    )
}

export default CampoTexto;