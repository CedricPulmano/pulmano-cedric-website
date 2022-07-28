import React, { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems.js";

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
          Cedric Pulmano <i class="fa-solid fa-dragon"></i>
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
                <a className="nav-links" href={item.link}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
