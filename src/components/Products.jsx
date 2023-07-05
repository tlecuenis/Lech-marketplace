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
                {products.map(product =>{
                    const isProductInCart = checkProductInCart(product)
                    return(
                    <li key={product.id}>
                        <img src={product.thumbnail} alt="" />
                        <p>{product.title}</p>
                        <p>{product.description}</p>    
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