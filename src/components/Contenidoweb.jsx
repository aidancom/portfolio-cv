import React from 'react'
import '../css/Contenido.scss'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faAddressBook } from '@fortawesome/free-solid-svg-icons'

const Contenidoweb = () => {
  return (
    <>
    <h2>Contenido de la web</h2>
    <div className='cuerpo-contenido'>
     
      <div className='cuerpo-contenido-cajas'>
        <div>
        <a href="/proyects">
          <FontAwesomeIcon icon={faDiagramProject}></FontAwesomeIcon>
          <p>Proyectos</p>
          </a>
        </div>
        <div>
        <a href="/about">
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          <p>Sobre mi</p>
          </a>
        </div>
        <div>
        <a href="/contact">
          <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
          <p>Contacto</p>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contenidoweb
