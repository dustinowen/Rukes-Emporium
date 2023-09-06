import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/items'>Items</Link>
        <Link to='/cart'>Shopping Cart</Link>
      </div>
    </div>
  );
};
