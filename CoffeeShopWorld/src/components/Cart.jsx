import './Cart.css'

function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="cart-container">
      <h1>Resumen de Compra</h1>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <h3>{item.title}</h3>
          <p>Q{item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>🗑️</button>
        </div>
      ))}
      <h2>Total: Q{total}</h2>
      <button className="pay-button">Pagar ahora</button>
    </div>
  )
}
export default Cart