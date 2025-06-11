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
    // Validar que el valor sea entre 1 y 10
    const numValue = Math.max(1, Math.min(10, parseInt(value) || 1));
    setQuantities(prev => ({ ...prev, [productId]: numValue }));
  };

  return (
    <div className="products-container">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.title}</h3>
          <p className="product-description">{product.description}</p>
          
          {/* Imagen debajo de la descripción */}
          <img 
            src={product.image} 
            alt={product.title} 
            className="product-image" 
            onError={(e) => { 
              e.target.src = '/assets/coffee-default.jpg';
            }} 
          />

          <p className="product-price">Precio: Q{product.price}</p>

          {/* Input numérico en lugar de range */}
          <div className="quantity-control">
            <label>Cantidad:</label>
            <input
              type="number"
              min="1"
              max="10"
              value={quantities[product.id] || 1}
              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              className="quantity-input"
            />
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