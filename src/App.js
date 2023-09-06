import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from './pages/home/Home'
import Items from "./pages/products/Items";
import { Cart } from './pages/cart/cart'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Example /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
