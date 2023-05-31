import { useState } from 'react'
import React from 'react'

const FormData = () => {

    const [datos, setDatos] = useState({
        nombre:"",
        apellido:"",
        email:"",
    });

    const manejarCambio = (event) => {
        setDatos({...datos,[event.target.name]: event.target.value})
    }

    const manejarEnvio = (event) => {
        event.preventDefault();
        console.log(datos);
    }

  return (
    <form onSubmit={manejarEnvio}>
        <h2>Formulario</h2>

        <label htmlFor="">Nombre</label>
        <input type="nombre" name='nombre' value={datos.nombre} onChange={manejarCambio} />

        <label htmlFor="">Apellido</label>
        <input type="apellido" name='apellido' value={datos.apellido} onChange={manejarCambio} />

        <label htmlFor="">Email</label>
        <input type="email" name='email' value={datos.email} onChange={manejarCambio} />
    </form>
  )
}

export default FormData