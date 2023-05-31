import { useState } from "react"

const ItemCount = ({initial, stock, addToCart}) => {

    const [count, setCount] = useState(initial);

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
    <>
        <div>
            <button onClick={decreaseCount}> - </button>
            <p> {count} </p>
            <button onClick={increaseCount}> + </button>
            <button onClick={()=>addToCart(count)}> Add to Cart </button>
        </div>
    </>
  )
}

export default ItemCount