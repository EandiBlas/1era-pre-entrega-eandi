import React from 'react'

const Product = ({nombre,moneda,precio}) => {
  return (
    <div>
        <h2>Producto</h2>
        <p>Nombre: {nombre}</p>
        <p>Precio: {moneda} {precio}</p>
        <button>Agregar al carrito</button>
    </div>
  )
}

export default Product