import React from "react";
import Cabecera from "../components/Cabecera";
import '../css/Home.scss';
import Contenidoweb from "./Contenidoweb";

const Home = () => {
  return (
    
    <div className="home">
      
      <Cabecera>Hola</Cabecera>
      <div className="cuerpo">
        <h2>Bienvenidos a mi pagina web</h2>
        
        <div className="cuerpo-parrafo">
          <p>En este espacio podreis conocer mas acerca de mi, tanto a nivel personal como profesional.</p>
          <p>Sientete libre de navegar a traves de la pagina para saber mas sobre mi, mirar mis Proyectos o simplemente ponerte en contacto conmigo.</p>
          <p>Esta pagina se ira actualizando, tanto a nivel de diseño como de informacion, asi que no penseis que se va a quedar asi, 
            sobretodo la parte de proyectos, ya que ire añadiendo a medida que vaya acabandolos.
          </p>
        </div>
        <Contenidoweb></Contenidoweb>
      </div>
    </div>
  );
};

export default Home;
