import { useProyects } from '../hooks/useProyects'
import Project from './Project'
import '../assets/css/spinner.css'


const Projects = () => {

  const {handleChange, data, categories, loading} = useProyects()

  return (
    <div className='px-10 w-full py-20 bg-[#E2F3F4] xl:h-full' id='projects'>
       <h2 className='font-bold text-center text-3xl'>Proyectos</h2>
        <div className='max-w-7xl w-full mx-auto py-10'>
          <div className='flex justify-center'>
            <select 
              defaultValue={''}
              onChange={handleChange} 
              className='bg-white w-1/2 p-1 rounded-lg border border-[#51A0AB]'
            >
              <option 
                value='' 
                disabled={true}
              >--- Selecciona una opción ---</option>
              {categories.map(category => (
                <option 
                  key={category} 
                  value={category}
                >{category}</option>
              ))}
              
            </select>
          </div>
          {loading ? (
            <div className='sk-cube-grid'>
              <div className='sk-cube sk-cube1'></div>
              <div className='sk-cube sk-cube2'></div>
              <div className='sk-cube sk-cube3'></div>
              <div className='sk-cube sk-cube4'></div>
              <div className='sk-cube sk-cube5'></div>
              <div className='sk-cube sk-cube6'></div>
              <div className='sk-cube sk-cube7'></div>
              <div className='sk-cube sk-cube8'></div>
              <div className='sk-cube sk-cube9'></div>
            </div>
          ) : (
            <div className='gap-15 pt-10 space-y-15 lg:grid lg:grid-cols-2 lg:space-y-0'>
              {data.map(project => (
                <Project 
                  key={project.id} 
                  project={project}
                />
              ))}
            </div>
          )}
        </div>
    </div>
  )
}

export default Projects
