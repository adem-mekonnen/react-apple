/* eslint-disable react/prop-types */
import { Component } from "react";

export default class NavLink extends Component {
  render() {
    const { navLinks } = this.props; // distructing props value

    return (
      <>
        {navLinks.map((link, index) => (
          <li key={index} className="nav-item">
            <a className="nav-link js-scroll-trigger" href={link.url}>
              {link.label}
            </a>
          </li>
        ))}
      </>
    );
  }
}
