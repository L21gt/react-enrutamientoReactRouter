import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import Nav from './components/Nav'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  return (
    <Router>
      <Nav cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Products addToCart={addToCart} />} />
        <Route 
          path="/finish-shop" 
          element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
export default App