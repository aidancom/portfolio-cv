import React from 'react'
import Cabecera from './Cabecera'
import '../css/About.scss'
import image from '../assets/img/aidan.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Faq from './Faq'

const About = () => {
  return (
  <>
    <Cabecera>Sobre mi</Cabecera>
    <div className="cuerpo">
        <div className='cuerpo-about'>
          <div className='cuerpo-about-foto'>
              <img src={image}></img>
              <h2>Hola, soy Aidan</h2>
              <p>Me dedico al desarrollo de aplicaciones web, especialmente la parte de front</p>
              <nav>
              <ul>
                <li><a href="https://www.instagram.com/a.v.m_99/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="https://www.facebook.com/aidan.verdejomaynero?locale=es_ES"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href="https://www.linkedin.com/in/aidan-verdejo-48496a133/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="https://github.com/aidancom/"><FontAwesomeIcon icon={faGithub} /></a></li>
              </ul>
            </nav>
          </div>
          <div className='cuerpo-about-texto'>
              <h2>Mas información</h2>
              <p>
                  Tengo 24 años y me encanta el mundo del desarrollo web. Aunque tambien tengo algunas nociones de backend,
                  prefiero todo lo relacionado a la parte de frontend.
              </p>
              <p>
                 En este pequeño espacio podreis conocer mas acerca de mi historia (aficiones, gustos, etc), si quieres saber mas
                 solo tienes que hacer scroll al FAQ que hay debajo y, si estas interesado en llevar a cabo algun proyecto, no dudes
                 en contactar conmigo pulsando el boton a continuación
              </p>
              <p>
                Un Saludo,<br></br>Aidan
              </p>
              <div className='cuerpo-about-texto-boton'>
                <a href="/contact">Contacto</a>
              </div>
            </div>
        </div>
        <Faq></Faq>
    </div>
    
  </>
  )
}

export default About
