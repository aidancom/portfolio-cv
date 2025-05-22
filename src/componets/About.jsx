
const About = () => {

  const styledlSpan = 'font-medium'
  const styledLi = 'pt-3'

  return (
    <div 
      className='px-10 w-full py-20 xl:h-full' 
      id='about'
    >
      <h2 className='font-bold text-center text-3xl'>Sobre mi</h2>
      <div className='max-w-5xl w-full mx-auto py-10 sm:grid sm:grid-cols-[30%_70%]'>
        <div className='flex justify-center sm:block'>
          <img
            className='pb-10 sm:w-3/4' 
            src='./img/aidan.png' 
            alt='Aidan Verdejo Maynero'
          /> 
        </div>
        <div className='w-[100%]'>
          <p className='font-medium text-2xl'>Desarrollador de aplicaciones web</p>
          <div className='w-30 h-1 bg-[#6DC7D1] mt-2'></div>
          <p className='text-[15px] pt-5'>
            Soy desarrollador frontend con experiencia en React, PHP, WordPress, JavaScript, HTML, CSS y SCSS. Me especializo en crear interfaces web funcionales, accesibles y visualmente atractivas, aplicando buenas prácticas y cuidando cada detalle del desarrollo.
            <br></br><br></br>
            Me motiva el aprendizaje continuo y siempre busco progresar, asumir nuevos retos y mejorar mis habilidades. En cada proyecto doy lo mejor de mí, con el objetivo de crecer profesionalmente y entregar soluciones de calidad.            
          </p>
        </div>
      </div>
      <div className='pt-5 max-w-5xl w-full mx-auto justify-between sm:flex sm:gap-5'>
        <ul>
          <li className={styledLi}>
            <span className={styledlSpan}>Nombre: </span>Aidan Verdejo Maynero
          </li>
          <li className={styledLi}>
            <span className={styledlSpan}>Edad: </span>26
          </li>
          <li className={styledLi}>
            <span className={styledlSpan}>Ubicación: </span>Paterna, Valencia
          </li>
          <li className={styledLi}>
            <span className={styledlSpan}>Email: </span>
            <a className='text-[#2aa2af]' href='mailto:19aidan99@gmail.com'>19aidan99@gmail.com</a>
          </li>
          <li className={styledLi}>
            <span className={styledlSpan}>Idiomas: </span>Español (nativo), Valenciano (avanzado), Inglés (intermedio)
          </li>
        </ul>
        <ul>
          <li className={styledLi}>
            <span className={styledlSpan}>Estudios: </span>Desarrollo de Aplicaciones Web
          </li>
          <li className={styledLi}>
            <span className={styledlSpan}>Experiencia: </span>+3 años en desarrollo frontend y 1 en backend
          </li>
          <li className={styledLi}>
            <span className={styledlSpan}>Tecnologías: </span>React, PHP, WordPress, JS, HTML,... {''}
            <a className='text-[#2aa2af]' href='#skills'>Ver más</a>
          </li>
          <li className={styledLi}>
            <span className={styledlSpan}>Soft Skills: </span>Resolución de problemas, adaptabilidad, autogestión
          </li>
          <li className={styledLi}>
            <span className={styledlSpan}>Interés profesional:: </span>Mejora continua, aprender nuevas tecnologías
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About
