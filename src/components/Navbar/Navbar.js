import React from "react";

import { Link } from "gatsby";
import github from "../../img/github-icon.svg";
import logo from "../../img/logo.svg";

import "./Navbar.scss";
// const netlifyIdentity = require("netlify-identity-widget");

const Navbar = class extends React.Component {
  // componentDidMount() {
  //   netlifyIdentity.init();

  //   // Get all "navbar-burger" elements
  //   const $navbarBurgers = Array.prototype.slice.call(
  //     document.querySelectorAll(".navbar-burger"),
  //     0
  //   );
  //   // Check if there are any navbar burgers
  //   if ($navbarBurgers.length > 0) {
  //     // Add a click event on each of them
  //     $navbarBurgers.forEach(el => {
  //       el.addEventListener("click", () => {
  //         // Get the target from the "data-target" attribute
  //         const target = el.dataset.target;
  //         const $target = document.getElementById(target);

  //         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  //         el.classList.toggle("is-active");
  //         $target.classList.toggle("is-active");
  //       });
  //     });
  //   }
  // }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="logo">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Innovators" className="img" />
            </Link>
          </div>
          <div className="links">
            <Link to="/about" className="link">
              About
            </Link>
            <Link to="/about" className="link">
              Help
            </Link>
            <Link to="/about" className="link">
              Contact us
            </Link>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
