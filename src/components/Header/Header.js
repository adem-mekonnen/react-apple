import React from "react";
import logosm from "../../images/icons/logo-sm.png";
import searchIcon from "../../images/icons/search-icon-sm.png";
import cartIcon from "../../images/icons/cart-sm.png";
import NavLink from "../Nav/NavLink";
import navLinks from "../Nav/NavData";
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
            <a className="navbar-brand mx-auto" href="#">
              <img src={logosm} />
            </a>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                {/* Use NavLink component to generate navigation links */}
                <NavLink navLinks={navLinks} />

                {/* Search Icon */}
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/search/">
                    <img src={searchIcon} alt="Search" />
                  </a>
                </li>
                {/* Cart Icon */}
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/cart/">
                    <img src={cartIcon} alt="Cart" />
                  </a>
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
