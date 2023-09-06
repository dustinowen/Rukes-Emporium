import { useState, useContext, createContext } from 'react'
// import { INVENTORY } from '../temp_itemDB'

const ShoppingCartContext = createContext();
// created a shopping cart context with a provider (ShoppingCartProvider)
// provider holds cart state + functions to add/remove items

export function ShoppingCartProvider() {
    // maybe a prop missing? 
    //do I need to declare children for the useContext?

    const [cart, setCart] = useState([]);
    // --> error I am getting: cannot destructure prop of cart as it is undefined; have attempted to start state with set values to test a define cart but no difference


    const addToCart = (item) => {
        //passing 'id' from Product.jsx as prop 'item'
        setCart([...cart, item])
    }

    const removeFromCart = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId)
        setCart(updatedCart)
    }

    return (
        <ShoppingCartContext.Provider value={{ cart, addToCart, removeFromCart }}></ShoppingCartContext.Provider>
    )
}


export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}
// created useShoppingCart hook to access the context values in other components for adding items
