import { withNamespaces } from "react-i18next"

const About = ({t}) => {

  const styledlSpan = 'font-medium'
  const styledLi = 'pt-3'

  return (
    <div 
      className='px-10 w-full py-20 xl:h-full' 
      id='about'
    >
      <h2 className='font-bold text-center text-3xl'>{t('sobreMiTitulo')}</h2>
      <div className='max-w-5xl w-full mx-auto py-10 sm:grid sm:grid-cols-[30%_70%]'>
        <div className='flex justify-center sm:block'>
          <img
            className='pb-10 sm:w-3/4' 
            src='./img/aidan.png' 
            alt='Aidan Verdejo Maynero'
          /> 
        </div>
        <div className='w-[100%]'>
          <p className='font-medium text-2xl'>{t('sobreMiCargo')}</p>
          <div className='w-30 h-1 bg-[#6DC7D1] mt-2'></div>
          <p className='text-[15px] pt-5'>
            {t('sobreMiDesc1')}
            <br></br><br></br>
            {t('sobreMiDesc2')}
          </p>
        </div>
      </div>
      <div className='pt-5 max-w-5xl w-full mx-auto justify-between sm:flex sm:gap-5'>
        <ul>
          <li className={styledLi}>
            <span className={styledlSpan}>{t('nombreTitulo')}: </span>Aidan Verdejo Maynero
          </li>
          <li className={styledLi}>
            <span className={styledlSpan}>{t('edadTitulo')}: </span>26
          </li>
          <li className={styledLi}>
            <span className={styledlSpan}>{t('ubicacionTitulo')}: </span>Paterna, Valencia
          </li>
          <li className={styledLi}>
            <span className={styledlSpan}>Email: </span>
            <a className='text-[#2aa2af]' href='mailto:19aidan99@gmail.com'>19aidan99@gmail.com</a>
          </li>
          <li className={styledLi}>
            <span className={styledlSpan}>{t('idiomasTitulo')}: </span>{t('idiomasDesc')}
          </li>
        </ul>
        <ul>
          <li className={styledLi}>
            <span className={styledlSpan}>{t('estudiosTitulo')}: </span>{t('estudiosDesc')}
          </li>
          <li className={styledLi}>
            <span className={styledlSpan}>{t('experienciaTitulo')}: </span>{t('experienciaDesc')}
          </li>
          <li className={styledLi}>
            <span className={styledlSpan}>{t('tecnologias')}: </span>React, PHP, WordPress, JS, HTML,... {''}
            <a className='text-[#2aa2af]' href='#skills'>{t('verMas')}</a>
          </li>
          <li className={styledLi}>
            <span className={styledlSpan}>{t('habilidades')}: </span>{t('habilidadesDesc')}
          </li>
          <li className={styledLi}>
            <span className={styledlSpan}>{t('interesProfesionalTitulo')}: </span>{t('interesProfesionalDesc')}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default withNamespaces()(About)
