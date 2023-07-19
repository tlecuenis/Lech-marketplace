import { useState } from "react"
import { Products } from "./components/Products"
import { products as initialProducts } from './mocks/products.json'
import { Header } from "./components/Header"
import { useFilters } from './hooks/useFilters.jsx'
import { Cart } from "./components/Cart"
import { CartProvider } from "./context/cart"

function App() {
  const [products] = useState(initialProducts)
  const {filterProducts} = useFilters()
  const [searchProducts, setSearchProducts] = useState(products)
  
  const filteredProducts = filterProducts(searchProducts)
  return (
    <CartProvider>
      {/* le pasamos al header el setFilters para que se lo pase a Filters y coloque los filtros */}
      {/* no lo podemos crear un estado directamente en header porque acá tenemos el renderizado de productos y los cálculos */}
      {/* Esto se llama prop-drilling */}
        <Header products={products} setSearchProducts={setSearchProducts}/>
        <Products products={filteredProducts}/>
    </CartProvider>
  )
}

export default App
