import './CartItem.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({item,amount}) => {
    const {removeProduct} = useContext(CartContext);
  return (
    <div className="cartItems">
        <img className="myCartImg" src={item.img} alt={item.name} />
        <h4> {item.name} </h4>
        <p> Cantidad: {amount} </p>
        <p> Precio: ${item.price} </p>
        <button id='myButton' className='myButton' onClick={() => removeProduct(item.id)}>Eliminar</button>
    </div>
  )
}

export default CartItem