import { Filters } from './Filters.jsx'
import './Header.css'
import { Cart } from "./Cart.jsx"
import { useState } from 'react'

export function Header ({products, setSearchProducts}) {
    const [filteredSearch, setFilteredSearch] = useState([])
    const handleChangeInput = (e) =>{
        console.log(e.target.value)
        const searchedProducts = products.filter((product) =>{
            const productLowered = product.title.toLowerCase()
            if (productLowered.includes(e.target.value.toLowerCase())){
                return product
            }
        })
        setFilteredSearch(searchedProducts)
    }
    const handleClickButton = () =>{
        setSearchProducts(filteredSearch)
    }
    return(
        <header>
            <nav className='navigation-bar'>
                <p>Lech Marketplace</p>
                <div>
                    <input 
                        type="text" 
                        name="search" 
                        placeholder='Search products'
                        onChange={handleChangeInput} 
                    />
                    <button onClick={handleClickButton}>🔍</button>
                </div>
                <Cart />
            </nav>
            
            <Filters />
        </header>
    )
}