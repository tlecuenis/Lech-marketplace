import { Filters } from './Filters.jsx'
import './Header.css'
import { Cart } from "./Cart.jsx"

export function Header () {
    return(
        <header>
            <nav className='navigation-bar'>
                <p>Lech Marketplace</p>
                <div>
                    <input type="text" name="search" id="" />
                    <button>🔍</button>
                </div>
                <Cart />
            </nav>
            
            <Filters/>
        </header>
    )
}