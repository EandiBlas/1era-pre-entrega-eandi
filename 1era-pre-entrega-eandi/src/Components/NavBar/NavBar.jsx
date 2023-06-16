import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  const logoSc = "https://cdn.discordapp.com/attachments/1034652891182546967/1116845013448527872/SC.png";
  return (
    <header className="header">
      
      <div className="contentHeader">

        <Link to={"/"}>
          <img className="logoSc" src={logoSc} alt="logo" />
        </Link>

        <nav className="contentNavbar">
          <NavLink to={`/Category/Samsung`} className='myli'>Samsung</NavLink>
          <NavLink to={`/Category/iPhone`} className='myli'>iPhone</NavLink>
          <NavLink to={`/Category/Huawei`} className='myli'>Huawei</NavLink>
          <NavLink to={`/Category/Xiaomi`} className='myli'>Xiaomi</NavLink>
        </nav>

        <CartWidget />

      </div>

    </header>
  )
}

export default NavBar