/* eslint-disable react/prop-types */
import { Component } from "react";
import { Link } from "react-router-dom";

export default class NavLink extends Component {
  render() {
    const { navLinks } = this.props; // distructing props value

    return (
      <>
        {navLinks.map((link, index) => (
          <li key={index} className="nav-item">
            <Link className="nav-link js-scroll-trigger" to={link.url}>
              {link.label}
            </Link>
          </li>
        ))}
      </>
    );
  }
}
