import { Outlet, Link } from "react-router-dom";
import '../css/Header.scss'

const Layout = () => {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">Sobre mi</Link>
          </li>
          <li>
            <Link to="contact">Contacto</Link>
          </li>
          <li>
            <Link to="proyects">Proyectos</Link>
          </li>
        </ul>
      </nav>

      
    </header>
    <main>
    <Outlet />
    </main>
    </>
  )
};

export default Layout;