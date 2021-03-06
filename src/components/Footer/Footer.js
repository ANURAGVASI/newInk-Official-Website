import React, { Component } from "react";
// import Avatar from "@material-ui/core/Avatar";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content row">
          <div className="col-md-1" />
          <div className="col-md-3 col-xs-12 col-sm-6 footer-item">
            <h4 className="footer-item-heading">NewInk Digital Solutions</h4>
            <p>We create possibilities for the connected world.</p>
            <p>Build your Business with us.</p>
          </div>

          <div className="col-md-2 col-xs-12 col-sm-6 footer-item footer-item-explore">
            <h4 className="footer-item-heading">Explore</h4>
            <ul className="footer-ul">
              <li>
                <a >About Us</a>
              </li>
              <li>
                <a >Our Services</a>
              </li>
              <li>
                <a >Technologies</a>
              </li>
              <li>
                <a >Contact us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-xs-12 col-sm-6 footer-item footer-social">
            <h4 className="footer-item-heading">Follow Us</h4>
            <ul class="footer-ul">
              <li>
                <a >
                  <i class="icon fa fa-twitter">&nbsp;&nbsp;</i>Twitter
                </a>
              </li>
              <li>
                <a >
                  <i class="icon fa fa-facebook">&nbsp;&nbsp;</i>Facebook
                </a>
              </li>
              <li>
                <a >
                  <i class="icon fa fa-instagram">&nbsp;&nbsp;</i>Instagram
                </a>
              </li>
              <li>
                <a >
                  <i class="icon fa fa-github">&nbsp;&nbsp;</i>Github
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-xs-12 col-sm-6 footer-item footer-social">
            <h4 className="footer-item-heading">Connect</h4>
            <ul class="footer-ul">
              <li>
                <i class="icon fa fa-location-arrow">&nbsp;&nbsp;</i>Hyderabad
              </li>
              <li>
                <i class="icon fa fa-phone">&nbsp;&nbsp;</i>+91-9948380255
              </li>
              <li>
                <i class="icon fa fa-envelope">&nbsp;&nbsp;</i>
                vasi.anurag@gmail.com
              </li>
            </ul>
          </div>
          <div className="col-md-1" />
        </div>
        <div className="footer-copyright">
          <p>COPYRIGHT © 2018 NewInk Technologies, inc. All Rights Reserved</p>
        </div>
      </div>
    );
  }
}

export default Footer;
