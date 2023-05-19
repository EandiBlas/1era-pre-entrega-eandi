import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({name,price,desc,id,img}) => {
  return (
    <div className='cartProduct'>
        <img className='imgProduct' src={img} alt={name} />
        <h3>Product: {name}</h3>
        <p>Description: {desc} </p>
        <p>Price: {price} </p>
        <p>Product ID: {id} </p>
        <button className='btnProduct'><Link className='btnProduct' to={`/item/${id}` }>Show Details</Link></button>
    </div>
  )
}

export default Item