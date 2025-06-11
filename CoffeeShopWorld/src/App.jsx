import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import Nav from './components/Nav'
import './App.css'

// function App() {
//   const [cartItems, setCartItems] = useState([])

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product])
//   }

//   const removeFromCart = (id) => {
//     setCartItems(cartItems.filter(item => item.id !== id))
//   }

//   return (
//     <Router>
//       <Nav cartCount={cartItems.length} />
//       <Routes>
//         <Route path="/" element={<Products addToCart={addToCart} />} />
//         <Route 
//           path="/finish-shop" 
//           element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} 
//         />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   )
// }
// export default App


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Verificar si el producto ya está en el carrito
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Si existe, actualizar la cantidad
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      } else {
        // Si no existe, agregarlo al carrito
        return [...prevItems, { ...product, quantity: product.quantity || 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <Nav cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<Products addToCart={addToCart} />} />
        <Route 
          path="/finish-shop" 
          element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;