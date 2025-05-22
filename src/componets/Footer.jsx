import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

  return (
    <div className='bg-[#9DDDDD] p-5 sm:grid sm:grid-cols-3 '>
      <div>
        <ul className='flex justify-center sm:justify-start pb-5 space-x-3'>
          <li>
            <a 
              href='https://github.com/aidancom/' 
              className='cursor-pointer'
              target='_blank'
            >
              <FontAwesomeIcon 
                icon={faGithub} 
                className='cursor-pointer transition text-[18px] hover:text-[#1F2328]'
            />
            </a>
          </li>
          <li>
            <a 
              href='https://www.linkedin.com/in/aidan-verdejo-48496a133/' 
              className='cursor-pointer'
              target='_blank'
            >
              <FontAwesomeIcon 
                icon={faLinkedin} 
                className='cursor-pointer transition text-[18px] hover:text-[#0077B5]'
              />
            </a>
          </li>
          <li>
            <a 
              href='https://www.instagram.com/a.v.m_99/'  
              className='cursor-pointer'
              target='_blank'
            >
              <FontAwesomeIcon 
                icon={faInstagram} 
                className='cursor-pointer transition text-[18px] hover:text-[#E4405F]'
              />
            </a>
          </li>
          <li>
            <a 
              href='https://www.facebook.com/aidan.verdejomaynero?locale=es_ES'
              className='cursor-pointer'
              target='_blank'
            >
              <FontAwesomeIcon 
                icon={faFacebook} 
                className='cursor-pointer transition text-[18px] hover:text-[#1877F2]'
              />
            </a>
          </li>
        </ul>
      </div>
      <div className='text-center'>
        <p>Copyright © {new Date().getFullYear()} Todos los derechos reservados</p>
      </div>
      <div></div>
    </div>
  )
}

export default Footer
