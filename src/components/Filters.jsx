import { useFilters } from '../hooks/useFilters'
import { useState, useId, useContext } from 'react'
import './Filters.css'

export function Filters () {
    const {filters, setFilters} = useFilters()
    const [minPrice, setMinPrice] = useState(0)
    const minPirceFilterId = useId()
    const categoryFilterId = useId()
    const [isOpen, setIsOpen] = useState(false)

    const handleChangeMinPrice = (e) =>{
        // prevState es el objeto entero del useFilter, osea {category: 'all', minPrice: 0}
        // Para no poner parámetro por parámetro se hace un callback con un rest operator
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
        // Esto es lo mismo que hacer:
        // setFilters({
        //     category: filters.category,
        //     minPrice: e.target.value
        // })
        
    }

    const handleChangeCategory = (e) =>{
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
        
    }

    return(
        <section className="filters">
            <label 
                className="filter-mobile" 
                htmlFor="filter-mobile" 
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen === true ? 'Filters ✖' : 'Filters ▼'}
            </label>
            <input
                id='filter-mobile'
                type="checkbox" 
                hidden
                
            />
            <div className={isOpen ? 'is-open' : ''}>
                <label htmlFor={minPirceFilterId}>Min price:</label>
                <input 
                    type="range" 
                    id={minPirceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div className={isOpen ? 'is-open' : ''}>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="men's clothing">Mens clothing</option>
                    <option value="women's clothing">Womens clothing</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                </select>
            </div>
        </section>
    )
}