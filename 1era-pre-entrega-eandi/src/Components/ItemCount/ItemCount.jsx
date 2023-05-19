import { useState, useEffect } from "react"

const ItemCount = ({stock, initial}) => {

    const [count, setCount] = useState(initial);


    const addToCart = () => {
        console.log(`Agregaste correctamente ${count} items`);
    }

    const increaseCount = () => {
        if(count < stock){
            setCount(count + 1 );
        }
    }

    const decreaseCount = () =>{
        if(count > initial){
            setCount(count - 1 );
        }
    }

  return (
    <div>
        <button onClick={decreaseCount}> - </button>
        <p> {count} </p>
        <button onClick={increaseCount}> + </button>
        <br />
        <br />
        <button onClick={addToCart}> Agregar al carrito</button>
        <br />
        <br />
    </div>
  )
}

export default ItemCount