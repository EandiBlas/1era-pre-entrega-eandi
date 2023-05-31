import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({ name, price, desc, id, img, stock }) => {

  const [addAmount, setAddAmount] = useState(0);

  const { addProduct } = useContext(CartContext);

  const handlerAmount = (amount) => {
    setAddAmount(amount);
    const item = { id, name, price }
    addProduct(item, amount);
  }

  return (
    <div className='containerItem'>
      <h2>Product: {name} </h2>
      <h3>Description: {desc} </h3>
      <h3>Price: {price} </h3>
      <h3>Product ID: {id} </h3>
      <img src={img} alt={name} />
      {
        addAmount > 0 ? (<Link to={"/cart"}> Finalizar Compra </Link>) : <ItemCount initial={1} stock={stock} addToCart={handlerAmount} />
      }
    </div>
  )
}

export default ItemDetail