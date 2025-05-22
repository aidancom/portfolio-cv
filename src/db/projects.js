import { v4 as uuid } from "uuid"

export const projects = [
  {
    id: uuid(),
    name: "Consultar clima",
    video: "buscar-clima-react",
    desc: "Proyecto para obtener el clima actual mediante búsqueda por ciudad y país usando una API externa.",
    stack: ["React", "CSS Modules", "TypeScript"],
    projectlink: "https://consultar-clima-react-api.netlify.app/",
    githublink: "https://github.com/aidancom/clima-react"
  },
  {
    id: uuid(),
    name: "Buscar recetas",
    video: "buscar-recetas-react",
    desc: "Aplicación que muestra recetas con opciones de busqueda por ingredientes, selección de categoría y filtros varios.",
    stack: ["React", "TailWind CSS", "TypeScript"],
    projectlink: "https://app-recetas-react.netlify.app/",
    githublink: "https://github.com/aidancom/app-recetas"
  },
  {
    id: uuid(),
    name: "Gestor de viajes",
    video: "gestor-viajes-react",
    desc: "Un dashboard para gestionar tus viajes. Cuenta con un panel, un formulario y un calendario para poder ver tus próximos viajes.",
    stack: ["React", "TailWind CSS", "JavaScript"],
    projectlink: "https://gestor-viajes.netlify.app/",
    githublink: "https://github.com/aidancom/gestor-viajes"
  },
  {
    id: uuid(),
    name: "Control de gastos",
    video: "control-gastos-react",
    desc: "App para llevar un control de gastos. Debes definir un presupuesto previo (el cual no se puede cambiar).",
    stack: ["React", "TailWind CSS", "TypeScript"],
    projectlink: "https://control-gastos-menusales.netlify.app/",
    githublink: "https://github.com/aidancom/control-gastos"
  },
  {
    id: uuid(),
    name: "Calculadora de propinas",
    video: "calculadora-propinas-react",
    desc: "Una aplicación para calcular el total a pagar del consumo. Este total varía según la propina",
    stack: ["React", "TailWind CSS", "TypeScript"],
    projectlink: "https://calcular-propinas-react.netlify.app/",
    githublink: "https://github.com/aidancom/calculadora-propinas"
  },
  {
    id: uuid(),
    name: "Contador de calorías",
    video: "contador-calorias-react",
    desc: "Aplicación para llevar un control de las calorías (tanto consumidas como quemadas)",
    stack: ["React", "TailWind CSS", "TypeScript"],
    projectlink: "https://calories-contador.netlify.app/",
    githublink: "https://github.com/aidancom/calorie-tracker"
  },
  {
    id: uuid(),
    name: "Tienda de guitarras",
    video: "tienda-guitarras-react",
    desc: "Una tienda de guitarras simple con un carrito funcional en el cual puedes agregar, eliminar y vaciar",
    stack: ["React", "TailWind CSS", "JavaScript"],
    projectlink: "https://guitarle.netlify.app/",
    githublink: "https://github.com/aidancom/guitarle"
  },
  {
    id: uuid(),
    name: "Aplicacion de clima V2",
    video: "aplicacion-clima-v2",
    desc: "Aplicacion para consultar el clima, siendo esta una version mejorada (mejor diseño, busca por población y da mas información)",
    stack: ["HTML", "SASS", "JavaScript"],
    projectlink: "https://api-tiempo-v2.netlify.app/",
    githublink: "https://github.com/aidancom/api-tiempo-v2"
  },
  {
    id: uuid(),
    name: "Aplicacion de clima",
    video: "aplicacion-clima",
    desc: "Aplicacion para consultar el clima en una porvincia con información muy básica",
    stack: ["HTML", "SASS", "JavaScript"],
    projectlink: "https://api-tiempo-v1.netlify.app/",
    githublink: "https://github.com/aidancom/api-tiempo-v1"
  }
]