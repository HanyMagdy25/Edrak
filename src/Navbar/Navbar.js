import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import logoImage from "../assets/logo.png"
// import {images} from "../constants";
import looo from "../assets/looo.svg"

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={looo} alt='edrak-logo' />
          </Link>
          

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={handleClick}>
                الرئيسية
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/podcast" className="nav-links" onClick={handleClick}>
                بودكاست
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/articles" className="nav-links" onClick={handleClick}>
                مقالات
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={handleClick}>
                ملخصات وأوراق
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={handleClick}>
                كتاب إدراك
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={handleClick}>
                تلفزيون إدراك
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;