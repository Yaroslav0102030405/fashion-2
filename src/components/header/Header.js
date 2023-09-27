import React from "react";
import "./header.css";
import logo from "./../../image/icons/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <a className="header__logo" href="#!">
            <img src={logo}/>
            fashion
          </a>
          <ul className="header__list">
            <li>
              <a href="#!">catalogue</a>
            </li>
            <li>
              <a href="#!">fashion</a>
            </li>
            <li>
              <a href="#!">favourite</a>
            </li>
            <li>
              <a href="#!">lifestyle</a>
            </li>
            <li>
              <a href="#!" className="header__nav-btn">sign up</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
