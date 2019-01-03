import React, { Component } from "react";
import "./newlinkeHeaderMenu.css";

class Header extends Component {
  componentDidMount() {
    window.onscroll = e => {
      if (window.scrollY > 150) {
        const ele = document.getElementById("headermenu-main-div");
        if (ele) {
          // ele.style.backgroundColor = "black";
          // ele.style.height = "50px";
          ele.setAttribute("class", "headermenu-main-div-2");
        }
      } else {
        if (window.scrollY === 0) {
          const ele = document.getElementById("headermenu-main-div");
          if (ele) {
            console.log("setting class");
            ele.setAttribute("class", "headermenu-main-div-1");
          }
        }
      }
    };
  }
  render() {
    return (
      <div id="headermenu-main-div" className="headermenu-main-div row">
        <div className="headermenu-logo-div col-xs-12 col-md-3">
          <a className="headermenu-logo-a"> NEWINK</a>
          <a className="headermenu-collapsemenu-a">X</a>
        </div>
        <div className="headermenu-menu-div col-xs-12 col-md-9">
          <a className="headermenu-menu-a">HOME</a>
          <a className="headermenu-menu-a">PAGES</a>
          <a className="headermenu-menu-a">GALLERY</a>
          <a className="headermenu-menu-a">ABOUT</a>
          <a className="headermenu-menu-a">SERVICES</a>
          <a className="headermenu-menu-a">BLOG</a>
          <a className="headermenu-menu-a">FEATURES</a>
        </div>
        {/* <div className="headermenu-contactus-div col-md-3">
          <button className="headermenu-contactus-btn">Contact Us</button>
        </div> */}
      </div>
    );
  }
}

export default Header;
