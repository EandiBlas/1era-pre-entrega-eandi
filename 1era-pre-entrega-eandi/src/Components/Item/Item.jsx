import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ name, price, desc, id, img, stock }) => {
  return (
    <div className='cartProduct'>
      <img className='imgProduct' src={img} alt={name} />
      <h3>Product: {name}</h3>
      <p>Description: {desc} </p>
      <p>Price: {price} </p>
      <p>Stock: {stock}</p>
        <Link to={`/item/${id}`}>
          <button className='myButton'> Más detalles </button>
        </Link>
    </div>
  )
}

export default Item