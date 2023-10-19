import { Filters } from './Filters.jsx'
import './Header.css'
import { Cart } from "./Cart.jsx"
import { useState } from 'react'

export function Header ({products, setSearchProducts}) {
    const [filteredSearch, setFilteredSearch] = useState([])
    // const [order, setOrder] = useState("categories")

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

    // Todavía no funciona
    // const handleChangeOrder = (e) =>{
    //     setOrder(() => e.target.value)
    //     console.log(order)

    //     if (order == "ascending"){
    //         products.sort((a, b) => a.product.title - b.product.title)
    //     } else if(order == "descending"){
    //         products.sort((a, b) => b.product.title - a.product.title)
    //     }
    //     else{
    //         products.sort((a, b) => a.category.title - b.category.title)
    //     }
    // }

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
            {/* Usarlo cuando funcione el sort */}
            {/* <div>
                <>
                <label htmlFor="orderBy">Order by:</label>
                <select id="orderBy" onChange={handleChangeOrder}>
                    <option value="categories">Categories</option>
                    <option value="ascending">Ascending (A-Z)</option>
                    <option value="descending">Descending (Z-A)</option>
                </select>
                </>
            </div> */}
        </header>
    )
}