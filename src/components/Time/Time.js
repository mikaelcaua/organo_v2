import { useState } from 'react';
import Colaborador from '../Colaborador/Colaborador';
import './Time.css'

const Time = ({ name, primarycolor, secundarycolor, colaboradores }) => {
  // Verifica se existem colaboradores
  const temColaboradores = colaboradores.some(colaborador => colaborador.time === name);

  return (
      (temColaboradores) && 
      (<section className='time' style={{ backgroundColor: secundarycolor }}>
          <h2 style={{ borderBottomColor: primarycolor }}>{name}</h2>
          {colaboradores.map((colaborador) => {
              if (colaborador.time === name) {
                  return <Colaborador description={colaborador.description} name={colaborador.name} color={primarycolor} key={colaborador.name} url={colaborador.url} />;
              } else {
                  return null;
              }
          })}
      </section>)
  );
}


export default Time;