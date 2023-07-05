import {useContext} from 'react'
import { FiltersContext } from "../context/filters.jsx"
export function useFilters (){
    const {filters, setFilters} = useContext(FiltersContext)
  
    // Función imprime productos con un valor mayor al minPrice, menor al maxPrice y que correspondan a la categoría seleccionada
    const filterProducts = (products) =>{
      return products.filter(product =>{
        return(
          // devuelve los productos que sean acordes al rango de precio -> por defecto mayor a $0
          product.price >= filters.minPrice &&
          // en el caso que no haya filtros, muestra todos
          // si seleccionaste alguna categoría específica (filters.category) mostra esos productos (product.category)
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
        )
      })
    }
    return {filters, filterProducts, setFilters}
}