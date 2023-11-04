import { Outlet, Link, useLocation } from "react-router-dom";
import "../css/Header.scss";


const Layout = () => {
  const location = useLocation();
  return (
    <>
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
      <main>
            <Outlet />
      </main>
    </>
  );
};

export default Layout;
