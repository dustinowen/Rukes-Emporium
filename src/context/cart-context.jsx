// import { createContext } from 'react'

// const CartContext = createContext()

// const getDefaultCart = () => {
//     let cart = {}
//     for (let i = 1; i < PRODUCTS.length + 1; i++){
//         cart[i] = 0
//     }
//     return cart
// }


// export const CartContextProvider = (props) => {
//     const [cartItems, setCartItems] = useState(getDefaultCart())

//     const addToCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })) 
//     }
//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 })) 
//     }
    
//     const contextValue = { cartItems, addToCart, removeFromCart }

//     return <CartContextProvider value={contextValue}>{props.children}</CartContextProvider>
// }