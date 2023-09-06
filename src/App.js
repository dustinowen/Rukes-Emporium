import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Example from "./components/Navbar";
import Home from "./pages/home/Home";
import Items from "./pages/items/Items";
import Cart from "./pages/cart/cart";
import { CartContext } from './context/cart-context'
// import { CartContextProvider } from "./context/cart-context";

function App() {
  return (
    <div className="App">
      {/* <CartContext.Provider value={{ eventNames, favNums: [1,2,3], whateverIWantToPass }}> */}
        <Router>
          {/* <Navbar /> */}
          <Example />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      {/* </CartContext.Provider> */}
    </div>
  );
}
export default App;
