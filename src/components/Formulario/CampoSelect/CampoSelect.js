import './CampoSelect.css'

const CampoSelect = ({timesnomes, aoAlterar})=>{
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

export default CampoSelect;