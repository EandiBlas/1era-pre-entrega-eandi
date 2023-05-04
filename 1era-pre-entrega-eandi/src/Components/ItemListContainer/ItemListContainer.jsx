import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <h2 className='MyTituloBienvenida'>{props.greetings}</h2>
  )
}

export default ItemListContainer