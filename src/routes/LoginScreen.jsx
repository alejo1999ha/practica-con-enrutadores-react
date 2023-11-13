import React from 'react'
import { useForm } from './hooks/useForm'
import { UsuarioContext } from './context/UsuarioContext'
import { useContext } from 'react'

export const LoginScreen = () => {

  const initialForm = {
    nombre: '',
    tecnologia: '',
    email: '',
    instagram: ''
    



  }
  const { formState, nombre, tecnologia, email, instagram, onInputChange } = useForm(initialForm)
  const { setUsuario } = useContext(UsuarioContext)

  const onSubmit = (e) => {
    e.preventDefault()
    setUsuario(formState)

  }


  return (
    <>
      <form className='container' onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
           
            name="nombre"
            value={nombre}
            onChange={onInputChange}
          />

        </div>
        <div className="mb-3">
          <label htmlFor="tecnologia" className="form-label">Tecnologia</label>
          <input
            type="text"
            className="form-control"
         
            name="tecnologia"
            value={tecnologia}
            onChange={onInputChange}
          />

        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
           
            name="email"
            value={email}
            onChange={onInputChange}
          />

        </div>
        <div className="mb-3">
          <label htmlFor="instagram" className="form-label">Instagram</label>
          <input
            type="text"
            className="form-control"
            
            name="instagram"
            value={instagram}
            onChange={onInputChange}
          />

        </div>

        <button type="submit" className="btn btn-primary">Registrar Usuario</button>
      </form>

    </>
  )
}
