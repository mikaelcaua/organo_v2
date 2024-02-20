import './CampoSelect.css'

const CampoSelect = ({times, aoAlterar})=>{
    return(
        <div className='camposelect'>
            <label>Time</label>
            <select onChange={aoAlterar}>
                {times.map(time=> <option key={time} value={time} >{time}</option>)}
            </select>
        </div>
    )
}

export default CampoSelect;