import './Cart.css';

function Cart({ cartItems, removeFromCart }) {
  // Calcular subtotales y total
  const calculateSubtotal = (price, quantity) => price * quantity;
  
  const total = cartItems.reduce(
    (sum, item) => sum + calculateSubtotal(item.price, item.quantity),
    0
  );

  return (
    <div className="cart-container">
      <h1>Resumen de Compra</h1>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img 
                src={item.image} 
                alt={item.title} 
                className="cart-item-image" 
              />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <div className="cart-item-meta">
                  <span>Cantidad: {item.quantity}</span>
                  <span>Precio unitario: Q{item.price}</span>
                  <span className="cart-item-subtotal">
                    Subtotal: Q{calculateSubtotal(item.price, item.quantity)}
                  </span>
                </div>
              </div>
              <button 
                className="remove-item-btn"
                onClick={() => removeFromCart(item.id)}
              >
                ×
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total: Q{total.toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;