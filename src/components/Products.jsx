import './Products.css'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
    const {addToCart, removeFromCart, cart} = useCart()

    const checkProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }

    return(
        <main>
            <ul>
                { products.length === 0 
                    ? <p>No matches for your search</p>  
                    : products.map(product =>{
                    const isProductInCart = checkProductInCart(product)
                    return(
                    <li key={product.id}>
                        <img src={product.image} alt="" />
                        <p title={product.title}>{product.title.substring(0,20) + '...'}</p>
                        {product.description.length > 100 
                            ? <p title={product.description}>{product.description.substring(0,100) + '...'}</p> 
                            : <p>{product.description}</p>
                        }
                        <p>${product.price}</p>
                        <button className={isProductInCart ? 'remove-cart' : 'add-cart'} onClick={() => {isProductInCart 
                            ? removeFromCart(product) 
                            : addToCart(product)
                        }}>
                            {
                                isProductInCart
                                    ? 'Remove from cart'
                                    : 'Add to cart'
                            }
                        </button>
                    </li>
                    )
                })}
            </ul>
        </main>
    )
}