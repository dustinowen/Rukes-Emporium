import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import GrubNibbles from "./pages/item-category/GrubNibbles/Items";
import Playthings from "./pages/item-category/Playthings/Items";
import Threads from "./pages/item-category/Threads/Items";
import Supplies from "./pages/item-category/Supplies/Items";
import NotFound from "./pages/not-found/oops";
import ShoppingCart from "./pages/cart/cart";
import Checkout from "./pages/cart/checkout/checkout";
import { CartContext } from "./context/cart-context";

export default function App() {
  useEffect(() => {
    localStorage.setItem("shopCart", JSON.stringify(cart));
  });

  const { Provider: CartData } = CartContext;
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(item);
  };

  return (
    <div>
      <CartContext.Provider value={{ setCart, addToCart }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items/grub" element={<GrubNibbles />} />
            <Route path="/items/playthings" element={<Playthings />} />
            <Route path="/items/threads" element={<Threads />} />
            <Route path="/items/supplies" element={<Supplies />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/cart/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </CartContext.Provider>
    </div>
  );
}
