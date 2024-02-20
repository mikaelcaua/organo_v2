import './Colaborador.css'

const Colaborador = ({name, description, color , url})=>{
    return(
        <div className='colaborador'>
            <div style={{backgroundColor:color, height:'75px', width:'100%'}}></div>
            <img src={url}></img>
            <h2>{name}</h2>
            <h3>{description}</h3>
        </div> 
    )
    
}

export default Colaborador;