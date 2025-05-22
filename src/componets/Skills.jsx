import { motion } from 'framer-motion'

const Skills = () => {

  const styledP = 'uppercase tracking-[6px]'

  return (
    <div className='px-10 w-full xl:h-full bg-[#E2F3F4] py-20' id='skills'>
      <h2 className='font-bold text-center text-3xl'>Skills</h2>
      <div className='max-w-7xl w-full mx-auto pt-10 lg:gap-45 md:grid md:grid-cols-2 md:gap-30'>
        <div className='space-y-7'>
          <div>
            <div className='flex justify-between items-center'>
              <p className={styledP}>JavaScript</p>
              <p>75%</p>
            </div>
            <div className='pt-2'>
              <div className='bg-gray-300 w-full h-4 rounded-full'>
                <motion.div 
                  initial={{width: '0'}} 
                  whileInView={{width: '75%'}}
                  transition={{ duration: 1 }} 
                  className='bg-[#51A0AB] h-full rounded-full'
                  viewport={{once: true}}
                ></motion.div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex justify-between items-center'>
              <p className={styledP}>HTML</p>
              <p>100%</p>
            </div>
            <div className='pt-2'>
              <div className='bg-gray-300 w-full h-4 rounded-full'>
                <motion.div 
                  initial={{width: '0'}} 
                  whileInView={{width: '100%'}} 
                  transition={{ duration: 1.5 }} 
                  className='bg-[#51A0AB] h-full rounded-full'
                  viewport={{once: true}}
                ></motion.div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex justify-between items-center'>
              <p className={styledP}>CSS</p>
              <p>90%</p>
            </div>
            <div className='pt-2'>
              <div className='bg-gray-300 w-full h-4 rounded-full'>
               <motion.div 
                initial={{width: '0'}} 
                whileInView={{width: '90%'}}
                transition={{ duration: 2 }} 
                className='bg-[#51A0AB] h-full rounded-full'
                viewport={{once: true}}
                ></motion.div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex justify-between items-center'>
              <p className={styledP}>PHP</p>
              <p>55%</p>
            </div>
            <div className='pt-2'>
              <div className='bg-gray-300 w-full h-4 rounded-full'>
               <motion.div 
                initial={{width: '0'}} 
                whileInView={{width: '55%'}} 
                transition={{ duration: 2.5 }} 
                className='bg-[#51A0AB] h-full rounded-full'
                viewport={{once: true}}
              ></motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className='space-y-7 py-8 md:py-0'>
          <div>
            <div className='flex justify-between items-center'>
              <p className={styledP}>SASS</p>
              <p>90%</p>
            </div>
            <div className='pt-2'>
              <div className='bg-gray-300 w-full h-4 rounded-full'>
                <motion.div 
                  initial={{width: '0'}}
                  whileInView={{width: '90%'}} 
                  transition={{ duration: 3 }} 
                  className='bg-[#51A0AB] h-full rounded-full'
                  viewport={{once: true}}
                ></motion.div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex justify-between items-center'>
              <p className={styledP}>React</p>
              <p>70%</p>
            </div>
            <div className='pt-2'>
              <div className='bg-gray-300 w-full h-4 rounded-full'>
                <motion.div 
                  initial={{width: '0'}} 
                  whileInView={{width: '70%'}} 
                  transition={{ duration: 3.5 }} 
                  className='bg-[#51A0AB] h-full rounded-full'
                  viewport={{once: true}}
                ></motion.div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex justify-between items-center'>
              <p className={styledP}>TailWind CSS</p>
              <p>65%</p>
            </div>
            <div className='pt-2'>
              <div className='bg-gray-300 w-full h-4 rounded-full'>
                <motion.div 
                  initial={{width: '0'}} 
                  whileInView={{width: '65%'}} 
                  transition={{ duration: 4 }} 
                  className='bg-[#51A0AB] h-full rounded-full'
                  viewport={{once: true}}
                ></motion.div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex justify-between items-center'>
              <p className={styledP}>WordPress</p>
              <p>85%</p>
            </div>
            <div className='pt-2'>
              <div className='bg-gray-300 w-full h-4 rounded-full'>
                <motion.div 
                  initial={{width: '0'}} 
                  whileInView={{width: '85%'}} 
                  transition={{ duration: 4.5 }} 
                  className='bg-[#51A0AB] h-full rounded-full'
                  viewport={{once: true}}
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
