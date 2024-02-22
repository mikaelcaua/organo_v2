import './CampoSelect.css'

interface CampoSelectProps{
    timesnomes: string[]
    aoAlterar: (event:React.ChangeEvent)=>void
}

export function CampoSelect ({timesnomes, aoAlterar}:CampoSelectProps){
    return(
        <div className='camposelect'>
            <label>Time</label>
            <select onChange={aoAlterar}>
                <option>Selecione uma opção</option>
                {timesnomes.map(time=> <option key={time} value={time} >{time}</option>)}
            </select>
        </div>
    )
}

