import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAsyncMovies } from "../Redux/MovieSlice";
// import {BiCameraMovie} from 'react-icons/bi';
// import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [search, setSearch] = useState("");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const dispatch = useDispatch()
  const submitHandle = (e) =>{
      e.preventDefault();
      if(search ==="") return alert("invalid")
      dispatch(fetchAsyncMovies(search))
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Cima4Life
          </a>

          <ul className="nav-links">
            <li className="nav-item">
              <a href="/" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/service" onClick={closeMobileMenu}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <Link to="/product" onClick={closeMobileMenu}>
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/sign-up" onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/watchlist" onClick={closeMobileMenu}>
                WatchList
              </Link>
            </li>
          </ul>

          <div>
            <form onSubmit={submitHandle}>
              <input
                type="text"
                
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
