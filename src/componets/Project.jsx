import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Project = ({project}) => {

  const stack = project.stack.toString().replaceAll(',', ' · ')

  return (
    <div className=' bg-white border border-[#51A0AB] rounded-lg'>
      <video 
        className='w-full' 
        loop={true} 
        autoPlay={true} 
        muted={true}
        src={`./video/${project.video}.mp4`}
      />
      <div className='space-y-3 p-5'>
        <p className='text-2xl font-medium'>{project.name}</p>
        <p>{project.desc}</p>
        <p><span className='font-medium'>Stack tecnologico:</span> {stack}</p>
        <div className='mt-6 flex justify-between flex-col space-y-4 sm:flex-row sm:space-y-0'>
          <a 
            className='bg-black text-white px-4 py-1 rounded-lg transition transform hover:scale-103 text-center' 
            href={project.githublink} 
            target='_blank'
          >Ver repositorio <FontAwesomeIcon className='pl-1' icon={faGithub}/></a>
          <a 
            className='bg-[#51A0AB] text-white px-4 py-1 rounded-lg transition transform hover:scale-103 text-center' 
            href={project.projectlink} 
            target='_blank'
          >Ir al proyecto <FontAwesomeIcon className='pl-1' icon={faArrowUpRightFromSquare}/></a>
        </div>
      </div>
    </div>
  )
}

export default Project
