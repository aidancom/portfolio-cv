import { Outlet, Link, useLocation } from "react-router-dom";
import { faInstagram, faFacebook, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../css/Header.scss";


const Layout = ({abierto, setAbierto}) => {
  const location = useLocation();
  const handleAbierto = () => {
    if (!abierto) {
      setAbierto(true);
      
    } else {
      setAbierto(false)
    }

  }
  return (
    <>
     <div className="burguer" onClick={handleAbierto} id={abierto ? "equis" : "burguer"}>
        <span className="burguer-bar"></span>
        <span className="burguer-bar"></span>
        <span className="burguer-bar"></span>
      </div>
    <div className="cabecera" id={abierto ? "open" : "closed"}>
     
     <div className='preheader'>
        <div className='preheader-social'>
            <nav>
              <ul>
                <li><a href="https://www.instagram.com/a.v.m_99/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="https://www.facebook.com/aidan.verdejomaynero?locale=es_ES"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href="https://www.linkedin.com/in/aidan-verdejo-48496a133/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="https://github.com/aidancom/"><FontAwesomeIcon icon={faGithub} /></a></li>
              </ul>
            </nav>
        </div>
        <div className='preheader-contacto'>
          <nav>
            <ul>
              <li><a href="mailto:19aidan99@gmail.com"><FontAwesomeIcon icon={faEnvelope} />19aidan99@gmail.com</a></li>
              <li><a href="tel:+34622881764"><FontAwesomeIcon icon={faPhone} />+34 622 88 17 64</a></li>
              <li><a href="https://wa.me/+34622881764"><FontAwesomeIcon icon={faWhatsapp} />622 88 17 64</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <header>
     
        <nav>
          <ul>
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">Incio</Link>
            </li>
            <li className={location.pathname === '/about' ? 'active' : ''}>
              <Link to="about">Sobre mi</Link>
            </li>
            <li className={location.pathname === '/contact' ? 'active' : ''}>
              <Link to="contact">Contacto</Link>
            </li>
            <li className={location.pathname === '/proyects' ? 'active' : ''}>
              <Link to="proyects">Proyectos</Link>
            </li>
          </ul>
        </nav>
      </header>
     
    </div>
    <main>
            <Outlet />
      </main>
    </>
  );
};

export default Layout;
