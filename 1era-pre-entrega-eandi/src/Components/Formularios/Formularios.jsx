import { useState } from 'react'
import React from 'react'

const Formularios = () => {

    const [name, setName] = useState("");
    const [lastName, setlastName] = useState("");

    const handlerFormulario = (event) => {
        event.preventDefault();

        const newClient = {name,lastName};
        console.log(newClient);

        setName("");
        setlastName("");
    }

  return (
    <form onSubmit={handlerFormulario}> 
        <h2>Formulario de contacto</h2>

        <label htmlFor="name">Nombre</label>
        <input type="text" id='name' onChange={(e)=> setName(e.target.value)} value={setName} />

        <label htmlFor="lastName">Apellido</label>
        <input type="text" id='lastName' onChange={(e)=> setlastName(e.target.value)} value={setlastName} />

        <button type="submit">Enviar</button>

    </form>
  )
}

export default Formularios