import React, { useState } from "react";
import "../css/Navbar.css";

function Navbar() {
  const [searchActive, setSearchActive] = useState(false);
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const handleSearchClick = () => {
    setSearchActive(!searchActive);
  };

  const handleMenuToggleClick = () => {
    setMobileNavActive(!mobileNavActive);
  };

  return (
    <div className="nav-wrapper">
      <div className="grad-bar"></div>
      <nav className="navbar">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png"
          alt="Company Logo"
        />
        <div
          className={`menu-toggle ${mobileNavActive ? "is-active" : ""}`}
          id="mobile-menu"
          onClick={handleMenuToggleClick}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul
          className={`nav ${searchActive ? "search" : "no-search"} ${
            mobileNavActive ? "mobile-nav" : ""
          }`}
        >
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">About</a>
          </li>
          <li className="nav-item">
            <a href="#">Work</a>
          </li>
          <li className="nav-item">
            <a href="#">Careers</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact Us</a>
          </li>
          <i
            className="fas fa-search"
            id="search-icon"
            onClick={handleSearchClick}
          ></i>
          <input
            className={`search-input ${searchActive ? "search-active" : ""}`}
            type="text"
            placeholder="Search.."
          />
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
