import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import imgCarrito from "../../icons/bytesize_cart.svg";

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext);
  return (
    <div>
        <Link className="imgCarrito" to='/cart'>
          <img className='imgCarrito' src={imgCarrito} alt="carrito" />
        {
          totalQuantity > 0 && <span className="indicatorNum"> {totalQuantity} </span>
        }
        </Link>
    </div>
  )
}

export default CartWidget