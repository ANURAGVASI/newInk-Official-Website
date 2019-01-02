import React, { Component } from "react";
import "./newlinkeHeaderMenu.css";

class Header extends Component {
  myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
  render() {
    return (
      <div className="headermenu-main-div row">
        <div className="headermenu-logo-div  col-md-3">
          <a className="headermenu-logo-a"> NEWINK</a>
          <a className="headermenu-collapsemenu-a">X</a>
        </div>
        <div className="headermenu-menu-div  col-md-6">
          <a className="headermenu-menu-a">SERVICES</a>
          <a className="headermenu-menu-a">ABOUT</a>
          <a className="headermenu-menu-a">EXPERTISE</a>
          <a className="headermenu-menu-a">TEMPLATES</a>
          <a className="headermenu-menu-a">TECHNOLOGIES</a>
        </div>
        <div className="headermenu-contactus-div col-md-3">
          <button className="headermenu-contactus-btn">Contact Us</button>
        </div>
      </div>
    );
  }
}

export default Header;
