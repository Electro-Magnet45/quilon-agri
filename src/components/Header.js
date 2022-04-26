import React from "react";
import "./Header.css";
import { useLocation, Link } from "react-router-dom";
import cart_icon from "../assets/cart.svg";

const Header = () => {
  const pathName = useLocation().pathname;
  return (
    <div className="header">
      <div className="header_container">
        <Link to="/">
          <img
            src="https://quilonagriproducts.com/wp-content/uploads/2019/12/cropped-WhatsApp-Image-2019-12-07-at-8.20.54-PM-1.jpeg"
            alt=""
          />
        </Link>
        <div className="header_links">
          <Link to="/">
            <div className={pathName === "/" ? "active" : ""}>Home</div>
          </Link>
          <Link to="/about">
            <div className={pathName === "/about" ? "active" : ""}>About</div>
          </Link>
          <Link to="/contact">
            <div className={pathName === "/contact" ? "active" : ""}>
              Contact Us
            </div>
          </Link>
        </div>
        <div className="header_cart">
          <img src={cart_icon} alt="" />
          <div className="header-cart_notify hidden">1</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
