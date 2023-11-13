import React, { useEffect, useState } from "react";
import Cabecera from "./Cabecera";
import Proyect from "./Proyect";
import "../css/Proyect.scss";

const Proyects = () => {
  const generarId = () => {
    return Date.now().toString(36);
  };
  const [filtro, setFiltro] = useState("");
  const [proyectos, setProyectos] = useState([
    {
      titulo: "Aplicacion Veterinaria",
      categoria: "React",
      descripcion:
        "Proyecto hecho usando Vite y React, el cual trata de un form para agregar, editar y borrar pacientes",
      url: "https://primero-proyecto-veterinaria.netlify.app/",
      key: generarId(),
    },
    {
      titulo: "Aplicacion control de gastos",
      categoria: "React",
      descripcion:
        "Proyecto hecho usando Vite y React, el cual trata de un controlador de gastos: pones la cantidad disponible y los gastos que vas teniendo, los cuales van restando al presupuesto incial, ademas de decirte lo que has gastado al mes",
      url: "https://calculadora-gastos-react.netlify.app/",
      key: generarId(),
    },
  ]);
  const [proyectosFiltrados, setProyectosFiltrados] = useState([]);

  useEffect(() => {
    const proyectosfiltrados = proyectos.filter(
      (proyecto) => proyecto.categoria === filtro,
    );
    if (filtro == "Todos") {
      setProyectosFiltrados(proyectos);
    } else {
      setProyectosFiltrados(proyectosfiltrados);
    }
  }, [filtro, proyectos]);
  return (
    <div>
      <Cabecera>Proyectos</Cabecera>
      <div className="cuerpo" id="proyectos">
        <div className="filtro">
          <form>
            <label>Seleccion la categoria que te gustaria visualizar</label>
            <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
              <option value="Todos">Todos</option>
              <option value="Javascript">Javascript</option>
              <option value="React">React</option>
              <option value="Vue">Vue</option>
              <option value="Angular">Angular</option>
            </select>
          </form>
        </div>

        {filtro ? (
          <>
            <h3>
              {proyectosFiltrados.length
                ? ""
                : "No hay proyectos disponibles aun"}
            </h3>
            {proyectosFiltrados.map((proyecto) => (
              <Proyect proyecto={proyecto} key={proyecto.key} />
            ))}
          </>
        ) : (
          <>
            <h3>
              {proyectos.length ? "" : "No hay proyectos disponibles aun"}
            </h3>
            {proyectos.map((proyecto) => (
              <Proyect proyecto={proyecto} key={proyecto.key} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Proyects;
