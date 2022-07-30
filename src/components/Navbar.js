import React, { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems.js";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    showMenu: false,
  };

  handleClick = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    return (
      <nav className="navbar-items">
        <h1 className="navbar-logo">
          <Link className="icon-links" to="/">
            Cedric Pulmano <i class="fa-solid fa-dragon"></i>
          </Link>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.showMenu ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.showMenu ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className="nav-links" to={item.link}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
