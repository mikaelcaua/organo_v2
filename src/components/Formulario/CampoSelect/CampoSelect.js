import './CampoSelect.css'

const CampoSelect = ({times})=>{
    return(
        <div className='camposelect'>
            <label>Time</label>
            <select>
                {times.map(time=> <option key={time} value={time}>{time}</option>)}
            </select>
        </div>
    )
}

export default CampoSelect;