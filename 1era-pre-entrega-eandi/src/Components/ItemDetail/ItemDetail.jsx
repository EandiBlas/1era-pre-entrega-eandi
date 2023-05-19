import './ItemDetail.css'

const ItemDetail = ({name,price,desc,id,img}) => {
  return (
    <div className='containerItem'>
        <h2>Product: {name} </h2>
        <h3>Description: {desc} </h3>
        <h3>Price: {price} </h3>
        <h3>Product ID: {id} </h3>
        <img src={img} alt={name} />
    </div>
  )
}

export default ItemDetail