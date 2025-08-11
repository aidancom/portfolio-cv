import { motion } from 'framer-motion'
import { useEffect } from 'react';
import { withNamespaces } from 'react-i18next'
import { useSkills } from '../hooks/useSkills';

const Skills = ({t}) => {

  const styledP = 'uppercase tracking-[6px]'
  const {skills} = useSkills()

  return (
    <div className='px-10 w-full xl:h-full bg-[#E2F3F4] py-20' id='skills'>
      <h2 className='font-bold text-center text-3xl'>{t('habilidades')}</h2>
      <div className='max-w-7xl w-full mx-auto pt-10 lg:gap-45 md:gap-30'>
        <div className='space-y-7 space-x- flex flex-wrap justify-between flex-col md:flex-row'>
          {skills.length == 0 ? (
            <p className='text-center'>En construccion</p>
          ) : (
            skills.map(skill => (
              <div className='w-full md:w-[47%]'>
                <div className='flex justify-between items-center'>
                  <p className={styledP}>{skill.skill}</p>
                  <p>{skill.level}%</p>
                </div>
                <div className='pt-2'>
                  <div className='bg-gray-300 w-full h-4 rounded-full'>
                    <motion.div 
                      initial={{width: '0'}} 
                      whileInView={{width: `${skill.level}%`}}
                      transition={{ duration: 1 }} 
                      className='bg-[#51A0AB] h-full rounded-full'
                      viewport={{once: true}}
                    ></motion.div>
                  </div>
                </div>
            </div>
            )
          ))}
        </div>
      </div>
    </div>
  )
}

export default withNamespaces()(Skills)
