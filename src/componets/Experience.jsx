import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive'

const Experience = () => {

  const isDesktop = useMediaQuery({minWidth: 1280})

  return (
    <div className='px-10 w-full py-20 xl:h-full' id='experience'>
       <h2 className='font-bold text-center text-3xl'>Experiencia</h2>
        <div className='max-w-7xl w-full mx-auto py-10 items-center xl:grid xl:grid-cols-[40%_20%_40%]'>
          <div>
            <div className='border border-[#51A0AB] bg-[#f8ffff] overflow-hidden p-3 rounded-lg'>
              <a 
                className='font-medium' 
                target='_blank' 
                href='https://www.avantio.com/es/'
              >
                <span className='text-2xl pr-2 underline'>Avantio</span> 
                <FontAwesomeIcon 
                  className='text-1xl' 
                  icon={faArrowUpRightFromSquare}
                />
              </a>
              <p className='text-[19px]'>Desarrollador Web</p>
              <p>2020-2023</p>
              <p className='pt-3'>
                <span className='font-bold'>Descripción:</span> {''}
                  Durante tres años formé parte de esta empresa, donde comencé como becario y, gracias a mi desempeño, fui incorporado al equipo. Durante este tiempo, desarrollé nuevas páginas web para clientes, gestioné modificaciones en sitios existentes mediante un sistema de tickets, contribuí a la mejora del framework interno en PHP y realicé ajustes puntuales en la página oficial desarrollada en WordPress.
              </p>
              <p className='pt-1'>
                <span className='font-bold'>Stack tecnológico:</span> {''} 
                JavaScript &bull; PHP &bull; SASS &bull; CSS &bull; HTML
              </p>
            </div>
          </div>
          <div className='text-center text-[#51A0AB] py-8'>
            <FontAwesomeIcon 
              icon={isDesktop ? faArrowRight : faArrowDown} 
              className='text-6xl'
            />
          </div>
          <div>
            <div className='border border-[#51A0AB] bg-[#f8ffff] overflow-hidden p-3 rounded-lg'>
              <a 
                className='font-medium' 
                target='_blank' 
                href='https://www.ro-des.com/'
              >
                <span className='text-2xl pr-2 underline'>RO-DES</span> 
                <FontAwesomeIcon 
                  className='text-1xl' 
                  icon={faArrowUpRightFromSquare}
                />
              </a>
              <p className='text-[19px]'>Desarrollador Web</p>
              <p>2023-2025</p>
              <p className='pt-3'>
                <span className='font-bold'>Descripción:</span> {''}
                 Durante un año y medio trabajé en esta empresa, donde participé activamente en la migración de sitios antiguos desarrollados con HTML, CSS y PHP a un entorno multisite en WordPress, con el objetivo de centralizar su gestión y modernizar su apariencia. También desarrollé nuevas webs en WordPress y, cuando fue necesario, implementé plugins personalizados para adaptarnos a las necesidades específicas de cada proyecto.
              </p>
              <p className='pt-1'>
                <span className='font-bold'>Stack tecnológico:</span> {''} 
                JavaScript &bull; PHP &bull; WordPress &bull; CSS &bull; HTML
              </p>
            </div>
          </div>
        </div>
        <div className='max-w-7xl w-full items-center mx-auto xl:grid xl:grid-cols-[40%_20%_40%] '>
          <div></div>
          <div></div>
          <div className='text-center text-[#51A0AB]'>
            <FontAwesomeIcon 
              icon={faArrowDown} 
              className='text-6xl'
            />
          </div>
        </div>
        <div className='max-w-7xl w-full mx-auto pt-10 items-center xl:grid xl:grid-cols-[40%_20%_40%]'>
          <div>{/* para futuro */}</div>
          <div>{/* para futuro */}</div>
          <div>
            <div className='border border-[#51A0AB] bg-[#f8ffff] overflow-hidden p-3 rounded-lg text-center'>
              <h3 className='text-3xl font-medium'>📢 Próximamente</h3>
              <p className='pt-5'>¿Eres una empresa? Este espacio puede ser <span className='font-bold'>tuyo</span>.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Experience
