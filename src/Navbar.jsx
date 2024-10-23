 import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const Navbar = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            src="data:image/png;base64,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"
            alt="Myntra Logo"
          />
        </Link>
      </div>

      <ul className="navbar-links">
        <li><a href="/">MEN</a></li>
        <li><a href="/">WOMEN</a></li>
        <li><a href="/">KIDS</a></li>
        <li><a href="/">HOME & LIVING</a></li>
        <li><a href="/">BEAUTY</a></li>
      </ul>

      <div className="navbar-search">
        <input type="text" placeholder="Search for products, brands and more" />
        <SearchIcon className="search-icon" />
      </div>

      <div className="navbar-icons">
        <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
          <div onClick={handleAuthentication} className="navbar-icons-option signup">
            <p>{user ? "LOGOUT" : "SIGN IN"}</p> {/* Conditional rendering */}
          </div>
        </Link>

        <div className="navbar-icons-option wishlist">
          <FavoriteBorderIcon />
        </div>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="navbar-icons-option basket">
            <ShoppingBasketIcon />
            <span className="navbar-icons-option basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
