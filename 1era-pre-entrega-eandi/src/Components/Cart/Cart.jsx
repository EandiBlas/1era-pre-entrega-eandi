import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const { cart, cartEmpty, total, totalQuantity } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="containerItem">
                <h2>No hay productos en el carrito</h2>
                <Link to='/' className='myButton'> Ver Productos </Link>
            </div>
        )
    }

    return (
        <div className='containerItem'>
            <div className='contentProducts'>
                {cart.map(product =>
                    <CartItem key={product.item.id} {...product} />
                )}
            </div>
            <h3>Productos Seleccionados: {totalQuantity} </h3>
            <h3>Va a comprar por un total de: ${total} </h3>
            <button id='myButton' className='myButton' onClick={() => cartEmpty()}>Vaciar Carrito</button>
            <Link to='/checkout'> <button id='myButton' className='myButton'>Finalizar Compra</button></Link>
            <Link to="/"><button id='myButton' className='myButton'>Seguir Comprando</button></Link>
        </div>
    )
}

export default Cart