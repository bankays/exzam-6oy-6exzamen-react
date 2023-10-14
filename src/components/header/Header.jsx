import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="nav-links">
          <div className="lft">
            <h2>Products</h2>
            <p>Home / Product</p>
          </div>
          <NavLink to="/">
            <button className="exit">
              <img src="../Exit.png" alt="icon" />
              Exit
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
