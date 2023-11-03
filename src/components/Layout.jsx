import { Outlet, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../css/Header.scss";

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
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
};

export default Layout;
