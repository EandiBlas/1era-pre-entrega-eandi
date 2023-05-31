import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext);
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/1058/1058965.png";
  return (
    <div>
        <Link to='/cart'>
        <img className='imgCarrito' src={imgCarrito} alt="carrito" />
        {
          totalQuantity > 0 && <span> {totalQuantity} </span>
        }
        </Link>
    </div>
  )
}

export default CartWidget