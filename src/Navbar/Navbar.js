import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import logoImage from "../assets/logo.png"
// import {images} from "../constants";
import looo from "../assets/looo.svg"
// import { copy } from "gh-pages/lib/util";
import $ from 'jquery';
import {isMobile} from 'react-device-detect';
import Swal from "sweetalert2";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  function coming() {
    let timerInterval
    Swal.fire({
        title: 'Coming Soon',
        timer: 5000,
        // timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()

        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })


    if (isMobile) {
        $(".navbar-toggler").trigger("click")
    }
}

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
              <Link to="/" className="nav-links" onClick={()=>{handleClick();coming()}} >
                بودكاست
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/articles" className="nav-links" onClick={handleClick}>
                مقالات
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={()=>{handleClick();coming()}}>
                ملخصات وأوراق
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={()=>{handleClick();coming()}}>
                كتاب إدراك
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={()=>{handleClick();coming()}}>
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