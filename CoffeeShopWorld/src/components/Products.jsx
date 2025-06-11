import { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css';

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.sampleapis.com/coffee/hot');
        const formattedProducts = response.data.map(product => ({
          ...product,
          image: product.image || '/assets/coffee-default.jpg',
          price: Math.floor(Math.random() * 201) + 100,
        }));
        setProducts(formattedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleQuantityChange = (productId, value) => {
    const numValue = value === '' ? '' : Math.max(1, Math.min(100, parseInt(value) || 1));
    setQuantities(prev => ({ ...prev, [productId]: numValue }));
  };

  const adjustQuantity = (productId, amount) => {
    setQuantities(prev => {
      const current = prev[productId] || 0;
      const newValue = Math.max(1, Math.min(100, current + amount));
      return { ...prev, [productId]: newValue };
    });
  };

  return (
    <div className="products-container">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.title}</h3>
          <p className="product-description">{product.description}</p>
          
          <img 
            src={product.image} 
            alt={product.title} 
            className="product-image" 
            onError={(e) => { 
              e.target.src = '/assets/coffee-default.jpg';
            }} 
          />

          <p className="product-price">Precio: Q{product.price}</p>

          <div className="quantity-control">
            <label>Cantidad:</label>
            <button 
              className="quantity-btn minus"
              onClick={() => adjustQuantity(product.id, -1)}
            >
              -
            </button>
            <input
              type="number"
              min="1"
              max="100"
              value={quantities[product.id] || ''}
              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              className="quantity-input"
              placeholder="1"
            />
            <button 
              className="quantity-btn plus"
              onClick={() => adjustQuantity(product.id, 1)}
            >
              +
            </button>
          </div>

          <button 
            className="add-to-cart-btn"
            onClick={() => addToCart({
              ...product,
              quantity: quantities[product.id] || 1
            })}
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;