import "./App.css";
import { useState } from "react";
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
  const { Provider: CartData } = CartContext;
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item])
    }

  const removeFromCart = () => {

  }

  console.log(CartData);

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
