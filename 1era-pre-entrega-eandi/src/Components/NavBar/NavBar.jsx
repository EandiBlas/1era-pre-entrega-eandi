import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
const NavBar = () => {
  return (
    <header>
        <h1 className='MyTitulo'>Shared Company</h1>

        <nav>
            <ul>
                <li>Apple iPhones</li>
                <li>Samsung</li>
                <li>Huawei</li>
                <li>Xiaomi</li>
            </ul>
        </nav>
    <CartWidget/>
    </header>
  )
}

export default NavBar