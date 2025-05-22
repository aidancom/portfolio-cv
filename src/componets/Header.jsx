import { useNavigatePage } from '../hooks/useNavigatePage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  
  const [open, setOpen] = useState(false)
  const {about, skills, experience, projects, contact} = useNavigatePage()
  const styleli = 'border border-white border-b-black pl-3 py-3 transition-all hover:border-b-green-400 hover:border'
  const styledMenu = 'border border-white border-l-black fixed right-0 bg-white h-full top-0 w-[300px]'

  const clicked = (ref) => (e) => {
    e.preventDefault()
    if (open) setOpen(false)
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <header className='z-999 fixed bg-white shadow-lg w-full p-4 flex items-center justify-between'>
      <img 
        className='w-[90px] border-1 border-[#6DC7D1] rounded-full'
        src='./img/logo.png'
        alt='Logo Aidan'
      />
      <div className='pr-4'>
        <div onClick={() => setOpen(true)}>
          <FontAwesomeIcon 
            className='text-2xl text-[#51A0AB] cursor-pointer' 
            icon={faBars}
          />
        </div>
        <AnimatePresence mode='wait'>
          {open && (
            <motion.div 
              initial={{right: '-500px'}} 
              animate={{right: '-0px'}} 
              exit={{right: '-500px'}} 
              transition={{ duration: 0.5 }} 
              className={styledMenu}
            >
            <div 
              className='text-right p-2'
              onClick={() => setOpen(false)}
            >
              <FontAwesomeIcon 
                className='cursor-pointer'
                icon={faX}/>
            </div>
            <nav>
              <ul className='flex font-medium flex-col'>
                <li className={styleli}>
                  <a 
                    href='#about' 
                    onClick={clicked(about)}
                  >
                    Sobre mí
                  </a>
                  </li>
                <li className={styleli}>
                  <a 
                    href='#skills' 
                    onClick={clicked(skills)}
                  >
                    Skills
                  </a>
                </li>
                <li className={styleli}>
                  <a 
                    href='#experience' 
                    onClick={clicked(experience)}
                  >
                    Experiencia
                  </a>
                </li>
                <li className={styleli}>
                  <a 
                    href='#projects' 
                    onClick={clicked(projects)}
                  >
                    Proyectos
                  </a>
                </li>
                <li className={styleli}>
                  <a 
                    href='#contact' 
                    onClick={clicked(contact)}
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
