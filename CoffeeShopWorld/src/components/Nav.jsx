import { Link } from 'react-router-dom'
import './Nav.css'

function Nav({ cartCount }) {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">CoffeeShopWorld</Link>
      <Link to="/finish-shop" className="nav-cart">
        🛒 {cartCount > 0 && <span>{cartCount}</span>}
      </Link>
    </nav>
  )
}
export default Nav