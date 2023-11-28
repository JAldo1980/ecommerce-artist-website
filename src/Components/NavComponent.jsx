import React from "react";
import { Link } from "react-router-dom";

function NavComponent() {
  return (
    <>
      <div className="nav-component">
        <div className="primary-menu">
          <Link to="/">
            <img
              src="/images/david-alderman-logo-removebg-preview.png"
              alt="david alderman logo"
              className="david-alderman-logo"
            />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="user-el">
          <img
            src="/images/shopping-cart-light.png"
            alt="cart-image"
            className="cart-img"
          />
          <img src="/images/user.png" alt="user-img" className="user-img" />
        </div>
        <div className="mobile-nav-flex">
          <Link to="/">
            <img
              src="/images/david-alderman-logo-removebg-preview.png"
              alt="david alderman logo"
              className="david-alderman-logo-mob"
            />
          </Link>
          <div className="hamburger">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>

        <div className="mobile-nav-container">
          <div className="mobile-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <img
              src="/images/shopping-cart-light.png"
              alt="cart-image"
              className="cart-img-mob"
            />
            <img
              src="/images/user.png"
              alt="user-img"
              className="user-img-mob"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavComponent;
