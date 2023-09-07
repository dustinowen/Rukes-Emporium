import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import GrubNibbles from "./pages/item-category/GrubNibbles/Items";
import Playthings from "./pages/item-category/Playthings/Items";
import Threads from "./pages/item-category/Threads/Items";
import Supplies from "./pages/item-category/Supplies/Items";

import ShoppingCart from "./pages/cart/cart";
import { CartContext } from "./context/cart-context";

export default function App() {
  useEffect(() => { localStorage.setItem('shopCart', JSON.stringify(cart)) })
  
  const { Provider: CartData } = CartContext;
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
      setCart([...cart, item])
    }

  const removeFromCart = (removedItem) => {
    const removeReq = removedItem.data._id
    console.log("removedItem", removedItem.data._id)
    console.log("cart test 88 ", cart)
    for (let i = 0; i < cart.length; i++){
      const search = cart
      const updatedCart = search.filter((item) => item.data._id !== removeReq)
      setCart(updatedCart)
    }
    localStorage.setItem('shopCart', JSON.stringify(cart))
    }

  return (
    <div>
      <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items/grub" element={<GrubNibbles />} />
            <Route path="/items/playthings" element={<Playthings />} />
            <Route path="/items/threads" element={<Threads />} />
            <Route path="/items/supplies" element={<Supplies />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </Router>
      </CartContext.Provider>
    </div>
  );
}
