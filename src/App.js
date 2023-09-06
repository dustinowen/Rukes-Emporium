import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Items from "./pages/items/Items";
import ShoppingCart from './pages/cart/cart'
import { ShoppingCartProvider } from "./context/cart-context";

export default function App() {
  return (
    <div className="App">
      {/* <ShoppingCartProvider> */}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </Router>
      {/* </ShoppingCartProvider> */}
    </div>
  );
}

