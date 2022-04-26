import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import looo from "../assets/looo.svg";
import $ from "jquery";
import { isMobile } from "react-device-detect";
import Swal from "sweetalert2";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  function coming() {
    let timerInterval;
    Swal.fire({
      title: "تأتي قريباً",
      timer: 5000,
      // timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });

    if (isMobile) {
      $(".navbar-toggler").trigger("click");
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home" className="navbar-logo">
            <img src={looo} alt="edrak-logo" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active " : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/home"
                className={"nav-links "}
                onClick={() => {
                  handleClick();
                }}
              >
                الرئيسية
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/ggg"
                className="nav-links"
                onClick={() => {
                  handleClick();
                  coming();
                }}
              >
                بودكاست
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/articles"
                className={"nav-links "}
                onClick={() => {
                  handleClick();
                }}
              >
                مقالات
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/papers"
                className="nav-links"
                onClick={() => {
                  handleClick();
                }}
              >
                ملخصات وأوراق
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/writers"
                className="nav-links"
                onClick={() => {
                  handleClick();
                }}
              >
                كُتاب إدراك
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/tv"
                className="nav-links"
                onClick={() => {
                  handleClick();
                }}
              >
                تلفزيون إدراك
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
