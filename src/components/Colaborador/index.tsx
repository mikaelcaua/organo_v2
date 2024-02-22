
import './Colaborador.css'

interface ColaboradorProps{
    name:string
    description:string
    color:string
    url:string
}

export function Colaborador ({name, description, color , url}:ColaboradorProps){
    return(
        <div className='colaborador'>
            <div style={{backgroundColor:color}} className='colaboradorfundo' ></div>
            <img src={url}></img>
            <h2>{name}</h2>
            <h3>{description}</h3>
        </div> 
    )
    
}

