import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive'
import { withNamespaces } from 'react-i18next'

const Experience = ({t}) => {

  const isDesktop = useMediaQuery({minWidth: 1280})

  return (
    <div className='px-10 w-full py-20 xl:h-full' id='experience'>
       <h2 className='font-bold text-center text-3xl'>{t('experienciaTitulo')}</h2>
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
              <p className='text-[19px]'>{t('puestoEmpresa')}</p>
              <p>2020-2023</p>
              <p className='pt-3'>
                <span className='font-bold'>{t('descripcionTrabajoTitulo')}:</span> {''}
                {t('descripcionTrabajo1Desc')}
              </p>
              <p className='pt-1'>
                <span className='font-bold'>{t('stackTecnologico')}:</span> {''} 
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
              <p className='text-[19px]'>{t('puestoEmpresa')}</p>
              <p>2023-2025</p>
              <p className='pt-3'>
                <span className='font-bold'>{t('descripcionTrabajoTitulo')}:</span> {''}
                {t('descripcionTrabajo2Desc')}
              </p>
              <p className='pt-1'>
                <span className='font-bold'>{t('stackTecnologico')}:</span> {''} 
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
              <h3 className='text-3xl font-medium'>📢 {t('proximamenteTitulo')}</h3>
              <p className='pt-5'>{t('proximamenteDesc')} <span className='font-bold'>{t('proximamenteDescPalabra')}</span>.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default withNamespaces()(Experience)
