import { useFormValidation } from '../hooks/useFormValidation'
import Errors from './Errors'
import '../assets/css/spinner.css'


const Contact = () => {

  const {register, handleSubmit, sendForm, errors, formData, loading} = useFormValidation()
  const styledDiv = 'flex flex-col space-y-2'
  const styledInput = 'border p-1 rounded-lg w-full focus:border-[#51A0AB] focus:outline-[#51A0AB]'

  return (
    <div className='px-10 w-full py-20 xl:h-full' id='contact'>
      <h2 className='font-bold text-center text-3xl'>¿Hablamos?</h2>
      <p className='text-center pt-5'>Escribe abajo tus datos de contacto si te ha interesado lo que has visto</p>
      <div className='max-w-5xl w-full mx-auto py-10'>
        <form 
          ref={formData} 
          onSubmit={handleSubmit(sendForm)}
          className='relative'
        >
        {loading && (
          <div className='absolute bg-[#ffffffba] w-full h-full flex justify-center items-center'>
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
        </div>
        )}
          <fieldset className='block space-y-2 gap-5 sm:grid sm:grid-cols-2'>
            <div className={styledDiv}>
              <label htmlFor='name'>Nombre*</label>
              <input 
                className={styledInput} 
                type='text' 
                placeholder='Escribe tu nombre'
                id='name'
                {...register('name', {
                  required: {value: true, message: 'Este campo es obligatorio'}
                })}
              />
              {errors.name && <Errors>{errors?.name?.message}</Errors>}
            </div>
            <div className={styledDiv}>
              <label htmlFor='phone'>Teléfono*</label>
              <input 
                className={styledInput} 
                type='text' 
                placeholder='Escribe tu nombre'
                id='phone' 
                {...register('phone', {
                  required: {value: true, message: 'Este campo es obligatorio'}
                })}
              />
              {errors.phone && <Errors>{errors?.phone?.message}</Errors>}
            </div>
            <div className={styledDiv}>
              <label htmlFor='email'>Email*</label>
              <input 
                className={styledInput} 
                type='text' 
                placeholder='Escribe tu nombre'
                id='email' 
                {...register('email', {
                  required: {value: true, message: 'Este campo es obligatorio'},
                  pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalido' }
                })}
              />
              {errors.email && <Errors>{errors?.email?.message}</Errors>}
            </div>
            <div className={styledDiv}>
              <label htmlFor='company_name'>Nombre de tu empresa*</label>
              <input 
                className={styledInput} 
                type='text' 
                placeholder='Escribe tu nombre'
                id='company_name' 
                {...register('company_name', {
                  required: {value: true, message: 'Este campo es obligatorio'}
                })}
              />
              {errors.company_name && <Errors>{errors?.company_name?.message}</Errors>}
            </div>
            <div className={styledDiv}>
              <label htmlFor='company_web'>Web de la empresa*</label>
              <input 
                className={styledInput} 
                type='text' 
                placeholder='Escribe tu nombre'
                id='company_web' 
                {...register('company_web', {
                  required: {value: true, message: 'Este campo es obligatorio'}
                })}
              />
              {errors.company_web && <Errors>{errors?.company_web?.message}</Errors>}
            </div>
            <div className={styledDiv}>
              <label htmlFor='subject'>Asunto*</label>
              <select 
                className={styledInput} 
                name='subject' 
                id='subject'
                defaultValue={''}
                {...register('subject', {
                  required: { value: true, message: 'Este campo es obligatorio' },
                  maxLength: { value: 500, message: 'Máximo 500 caracteres' }
                })}
              >
                <option value='' disabled>--- Seleccione una opcion ---</option>
                <option value='Interes en contratación'>He visto tu perfil/cv y me ha interesado para mi empresa</option>
                <option value='Proponer un proyecto'>Me gustaría proponerte un proyecto</option>
              </select>
              {errors.subject && <Errors>{errors?.subject?.message}</Errors>}
            </div>
          </fieldset>
          <fieldset className='pt-5'>
            <div className={styledDiv}>
              <label htmlFor='reason'>¿Qué te trae por aquí?*</label>
              <textarea 
                className='border p-1 rounded-lg' 
                name='reason'
                id='reason'
                placeholder='Escribe aqui tu motivo de contacto'
                {...register('reason', {
                  required: { value: true, message: 'Este campo es obligatorio' },
                  maxLength: { value: 500, message: 'Máximo 500 caracteres' }
                })}
              >
              </textarea>
              {errors.reason && <Errors>{errors?.reason?.message}</Errors>}
            </div>
          </fieldset>
          <div className='flex justify-end'>
            <input 
              type='submit' 
              className='bg-[#51A0AB] text-white py-2 px-10 mt-7 rounded-lg cursor-pointer border font-medium border-white transition hover:border-[#51A0AB] hover:bg-white hover:text-[#51A0AB]'
              value='Enviar' 
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
