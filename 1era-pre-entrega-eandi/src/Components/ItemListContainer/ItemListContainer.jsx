import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductByCategory } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greetings }) => {

  const [products, setProducts] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {

    const functionProducts = idCategory ? getProductByCategory : getProducts;

    functionProducts(idCategory)
      .then(response => setProducts(response))
      .catch(error => console.error(error))
  }, [idCategory])

  return (
    <>
      <h2>{greetings}</h2>
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer