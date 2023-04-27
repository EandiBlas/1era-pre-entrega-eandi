import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/1058/1058965.png";
  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="carrito" />
        <strong>1</strong>
    </div>
  )
}

export default CartWidget