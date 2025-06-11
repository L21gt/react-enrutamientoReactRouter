import { useState, useEffect } from 'react'
import axios from 'axios'
import './Products.css'

function Products({ addToCart }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://api.sampleapis.com/coffee/hot')
      .then(res => {
        const withPrices = res.data.map(item => ({
          ...item,
          price: Math.floor(Math.random() * 201) + 100 // Q100-Q300
        }))
        setProducts(withPrices)
      })
  }, [])

  return (
    <div className="products-container">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Precio: Q{product.price}</p>
          <button onClick={() => addToCart(product)}>+</button>
        </div>
      ))}
    </div>
  )
}
export default Products