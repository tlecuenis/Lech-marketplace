import { useFilters } from '../hooks/useFilters'
import { useState, useId, useContext } from 'react'
import './Filters.css'

export function Filters () {
    const {filters, setFilters} = useFilters()
    const [minPrice, setMinPrice] = useState(0)
    const minPirceFilterId = useId()
    const categoryFilterId = useId()

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
            <div>
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
            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                    
                </select>
            </div>
        </section>
    )
}