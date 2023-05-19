import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <Link to={"/"} className='MyTitulo'>
        <h1 >Shared Company</h1>
      </Link>

      <nav>
          <ul>
              <li><NavLink to={`/Category/1`} className='myli'>Samsung</NavLink></li>
              <li><NavLink to={`/Category/2`} className='myli'>Apple iPhones</NavLink></li>
              <li><NavLink to={`/Category/3`} className='myli'>Huawei</NavLink></li>
              <li><NavLink to={`/Category/4`} className='myli'>Xiaomi</NavLink></li>
          </ul>
      </nav>

      <CartWidget/>

    </header>
  )
}

export default NavBar