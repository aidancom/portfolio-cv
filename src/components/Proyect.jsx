import React from 'react'

const Proyect = ({proyecto}) => {
  return (
    <div className='proyecto'>
        <div className='proyecto-foto'>
          <iframe src={proyecto.url}/>
        </div>
        <div className='proyecto-texto'>
          <h3>{proyecto.titulo}</h3>
          <p><span>Descripcion: </span>{proyecto.descripcion}</p>
          <p><span>Categoria: </span>{proyecto.categoria}</p>
          <div className='proyecto-texto-boton'>
            <a target='_blank' href={proyecto.url}>Llévame!</a>
          </div>
      </div>
    </div>
  )
}

export default Proyect
