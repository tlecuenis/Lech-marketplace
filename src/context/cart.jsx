import { createContext, useState } from 'react'

// Creamos el contexto -> que tenemos que consumir
export const CartContext = createContext()

// Proveer acceso al contexto
export function CartProvider ({ children }){
    const [cart, setCart] = useState([])

    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        
        if (productInCartIndex >= 0){
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }
        
        setCart(prevState =>([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))

    }
    const clearCart = () => setCart([])

    const removeFromCart = (product) =>{
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}