import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const { cart, cartEmpty, total, totalQuantity } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to='/'> Ver Productos </Link>
            </>
        )
    }

    return (
        <div>
            {cart.map(product => <CartItem key={product.id} {...product} />)}
            <h3>total: ${total} </h3>
            <h3>Cantidad total: {totalQuantity} </h3>
            <button onClick={() => cartEmpty()} >Vaciar Carrito</button>
            <Link to='/checkout'> Finalizar Compra </Link>

        </div>
    )
}

export default Cart