import { useEffect, useState } from "react"
import { Products } from "./components/Products"
// import { products as initialProducts } from './mocks/products.json'
import { Header } from "./components/Header"
import { Cart } from "./components/Cart"
import { CartProvider } from "./context/cart"
import { useFetch } from "./hooks/useFetch"
import { useFilters } from './hooks/useFilters.jsx'

function App() {
  const {products, loading, searchProducts, setSearchProducts} = useFetch('https://fakestoreapi.com/products')
  const {filterProducts} = useFilters()
  
  const filteredProducts = filterProducts(searchProducts)

  return (
    <CartProvider>
      {/* le pasamos al header el setFilters para que se lo pase a Filters y coloque los filtros */}
      {/* no lo podemos crear un estado directamente en header porque acá tenemos el renderizado de productos y los cálculos */}
      {/* Esto se llama prop-drilling */}
      <Header products={products} setSearchProducts={setSearchProducts}/>
      {loading == false
        ? <Products products={filteredProducts}/>
        : <p>Loading</p>  
      }
    </CartProvider>
  )
}

export default App
