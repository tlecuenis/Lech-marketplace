import './Cart.css'
import { useCart } from '../hooks/useCart'
import { useState } from 'react'

function CartItem ({thumbnail, price, title, quantity, addToCart}) {
    
    return(
        <li>
            
            <img src={thumbnail} alt={title} />
            
            <p>
                <strong>{title}</strong> ${price}
            </p>

            <footer>
                <small>
                    Quantity: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart (){
    const { addToCart, clearCart, cart } = useCart()
    const [isOpen, setIsOpen] = useState(false)
    

    return(
        <>
            <label htmlFor="cartButton" className={isOpen === true ? 'cart-button opened-cart' : 'cart-button'} onClick={() => setIsOpen(!isOpen)}>{isOpen === true ? '❌' : '🛒'}</label>
            <input 
                id="cartButton" 
                type="checkbox" 
                hidden
            />

            <aside className='cart'>
                <strong>Cart</strong>
                <ul>
                    {
                        cart.length === 0 
                            ? <p className='little-text'>The cart is empty. Add products to checkout.</p>
                            : cart.map(product =>(
                                <CartItem key={product.id} addToCart={() => addToCart(product)} {...product} />
                            ))
                    }
                </ul>
                
                <button onClick={clearCart}>Clear Cart</button>
            </aside>
        </>
    )
}