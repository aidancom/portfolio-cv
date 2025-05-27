import { useFormValidation } from '../hooks/useFormValidation'
import Errors from './Errors'
import '../assets/css/spinner.css'
import { withNamespaces } from 'react-i18next'


const Contact = ({t}) => {

  const {register, handleSubmit, sendForm, errors, formData, loading} = useFormValidation()
  const styledDiv = 'flex flex-col space-y-2'
  const styledInput = 'border p-1 rounded-lg w-full focus:border-[#51A0AB] focus:outline-[#51A0AB]'

  return (
    <div className='px-10 w-full py-20 xl:h-full' id='contact'>
      <h2 className='font-bold text-center text-3xl'>{t('contactoTitulo')}</h2>
      <p className='text-center pt-5'>{t('contactoDesc')}</p>
      <div className='max-w-5xl w-full mx-auto pt-10'>
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
              <label htmlFor='name'>{t('contactoNombre')}*</label>
              <input 
                className={styledInput} 
                type='text' 
                placeholder={t('contactoNombrePlaceholder')}
                id='name'
                {...register('name', {
                  required: {value: true, message: 'Este campo es obligatorio'}
                })}
              />
              {errors.name && <Errors>{errors?.name?.message}</Errors>}
            </div>
            <div className={styledDiv}>
              <label htmlFor='phone'>{t('contactoTelefono')}*</label>
              <input 
                className={styledInput} 
                type='text' 
                placeholder={t('contactoTeléfonoPlaceholder')}
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
                placeholder={t('contactoEmailPlaceHolder')}
                id='email' 
                {...register('email', {
                  required: {value: true, message: 'Este campo es obligatorio'},
                  pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalido' }
                })}
              />
              {errors.email && <Errors>{errors?.email?.message}</Errors>}
            </div>
            <div className={styledDiv}>
              <label htmlFor='company_name'>{t('contactoNombreEmpresa')}*</label>
              <input 
                className={styledInput} 
                type='text' 
                placeholder={t('contactoNombreEmpresaPlaceholder')}
                id='company_name' 
                {...register('company_name', {
                  required: {value: true, message: 'Este campo es obligatorio'}
                })}
              />
              {errors.company_name && <Errors>{errors?.company_name?.message}</Errors>}
            </div>
            <div className={styledDiv}>
              <label htmlFor='company_web'>{t('contactoWebEmpresa')}*</label>
              <input 
                className={styledInput} 
                type='text' 
                placeholder={t('contactoWebEmpresaPlaceholder')}
                id='company_web' 
                {...register('company_web', {
                  required: {value: true, message: 'Este campo es obligatorio'}
                })}
              />
              {errors.company_web && <Errors>{errors?.company_web?.message}</Errors>}
            </div>
            <div className={styledDiv}>
              <label htmlFor='subject'>{t('contactoAsunto')}*</label>
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
                <option value='' disabled>--- {t('proyectosSeleccionaOpcion')} ---</option>
                <option value='Interes en contratación'>{t('contactoAsunto1')}</option>
                <option value='Proponer un proyecto'>{t('contactoAsunto2')}</option>
              </select>
              {errors.subject && <Errors>{errors?.subject?.message}</Errors>}
            </div>
          </fieldset>
          <fieldset className='pt-5'>
            <div className={styledDiv}>
              <label htmlFor='reason'>{t('contactoMotivo')}*</label>
              <textarea 
                className='border p-1 rounded-lg' 
                name='reason'
                id='reason'
                placeholder={t('contactoMotivoPlaceholder')}
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
              value={t('contactoBoton')}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default withNamespaces()(Contact)
