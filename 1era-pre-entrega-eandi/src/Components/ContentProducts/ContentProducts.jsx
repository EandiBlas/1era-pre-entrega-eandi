import Product from "../Product/Product"

const ContentProducts = () => {
  return (
    <div>
      <Product nombre="Apple iPhone 14 Plus" moneda="USD" precio={738}/>
      <Product nombre="Samsung Galaxy S22 Ultra" moneda="USD" precio={768}/>
    </div>
  )
}

export default ContentProducts