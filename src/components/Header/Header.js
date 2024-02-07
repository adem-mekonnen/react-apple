import React from "react";
import logosm from "../../images/icons/logo-sm.png";
import searchIcon from "../../images/icons/search-icon-sm.png";
import cartIcon from "../../images/icons/cart-sm.png";
import NavLink from "../Nav/NavLink";
import navLinks from "../Nav/NavData";
import { Link } from "react-router-dom";
function Header() {
  // console.log(data);
  return (
    <div>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <Link className="navbar-brand mx-auto" to="#">
              <img src={logosm} alt="mac" />
            </Link>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                {/* Use NavLink component to generate navigation links */}
                <NavLink navLinks={navLinks} />

                {/* Search Icon */}
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/search/">
                    <img src={searchIcon} alt="Search" />
                  </Link>
                </li>
                {/* Cart Icon */}
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/cart/">
                    <img src={cartIcon} alt="Cart" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
