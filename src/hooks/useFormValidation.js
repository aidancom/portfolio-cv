import { useForm } from "react-hook-form"
import  emailjs  from "@emailjs/browser"
import { useState } from "react"
import { toast } from "react-toastify"

export const useFormValidation = () => {

  const {handleSubmit, register, reset, formState: {errors}} = useForm()

  const formData = useForm()
  const token = import.meta.env.VITE_EMAIL_TOKEN
  const [loading, setLoading] = useState(false)

  const sendForm = async () => {
    setLoading(true);
    try {
      await emailjs.sendForm(
        'servicio_correo',
        'template_email_portfolio',
        formData.current,
        token
      );
      toast.success('Formulario enviado con éxito', {
        closeOnClick: true,
        pauseOnHover: false,
      })
      reset();
    } catch (error) {
      toast.error('Ha habido un error', {
        closeOnClick: true,
        pauseOnHover: false,
      })
    } finally {
      setLoading(false);
    }
};

  return {
    register,
    handleSubmit,
    sendForm,
    formData,
    errors,
    loading
  }
}