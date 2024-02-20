import Colaborador from '../Colaborador/Colaborador';
import './Time.css'

const Time = ({name, primarycolor, secundarycolor, colaboradores})=>{
    return (
        <section className='time' style={{backgroundColor: secundarycolor}}>

          <h2 style={{borderBottomColor: primarycolor}}>{name}</h2>

          {colaboradores.map((colaborador) => {
            if (colaborador.time == name) {
              return <Colaborador key={colaborador.name} url={colaborador.url} />;
            }else{
                return null
            }
          })}

        </section>
      );
}

export default Time;