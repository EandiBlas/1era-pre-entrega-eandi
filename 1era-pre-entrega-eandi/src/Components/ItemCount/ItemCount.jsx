import { useState } from "react"
import { Link } from "react-router-dom";
import "./ItemCount.css"

const ItemCount = ({ initial, stock, addToCart }) => {

    const [count, setCount] = useState(initial);

    const increaseCount = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decreaseCount = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <button className="myButton" onClick={() => addToCart(count)}>Añadir al carrito</button>
            <div>
                <button className="myButton" onClick={decreaseCount}> - </button>
                <button className="myButton"> {count} </button>
                <button className="myButton" onClick={increaseCount}> + </button>
            </div>
            <Link to="/" className="myButton">Seguir Comprando</Link>
        </>
    )
}

export default ItemCount