import React, { Component } from 'react';
// import Avatar from "@material-ui/core/Avatar";
import "./footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                {/* <div className="footer-content container"> */}
                 <p className="footer-heading-p">Bring your Datacenter to the Modern Era</p>
                 <button className="footer-shedule-btn">Schedule a Meeting</button>
                 
                 <div className="footer-content container row">
                    <div className="col-md-1"></div>
                   <div className="col-md-3 col-xs-12 col-sm-6 footer-item">
                        <h4 className="footer-item-heading">NewInk Digital Solutions</h4>
                        <p>We create possibilities for the connected world.</p>
                        <p>Build your Business with us.</p>
                        <button>Lets Talk</button>
                    </div>
                    
                    <div className="col-md-2 col-xs-12 col-sm-6 footer-item footer-item-explore">
                        <h4 className="footer-item-heading">Explore</h4>
                        <ul className="footer-ul">
                          <li><a href="#">About Us</a></li>
                          <li><a href="#">Our Services</a></li>
                          <li><a href="#">Technologies</a></li>
                          <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-xs-12 col-sm-6 footer-item footer-social">
				      <h4 className="footer-item-heading">Follow Us</h4>
					  <ul class="footer-ul">
						<li><a href="#"><i class="icon fa fa-twitter">&nbsp;&nbsp;</i>Twitter</a></li>
						<li><a href="#"><i class="icon fa fa-facebook">&nbsp;&nbsp;</i>Facebook</a></li>
						<li><a href="#"><i class="icon fa fa-instagram">&nbsp;&nbsp;</i>Instagram</a></li>
						<li><a href="#"><i class="icon fa fa-github">&nbsp;&nbsp;</i>Github</a></li>
					  </ul>
			        </div>
                    <div className="col-md-2 col-xs-12 col-sm-6 footer-item footer-social">
				      <h4 className="footer-item-heading">Contact Us</h4>
					  <ul class="footer-ul">
						<li><i class="icon fa fa-location-arrow">&nbsp;&nbsp;</i>Hyderabad</li>
						<li><i class="icon fa fa-phone">&nbsp;&nbsp;</i>+91-9948380255</li>
						<li><i class="icon fa fa-envelope">&nbsp;&nbsp;</i>vasi.anurag@gmail.com</li>
					  </ul>
			        </div>
                    <div className="col-md-1"></div>
                 </div>
                 {/* <hr/> */}
                 <div className="footer-copyright">
                        <p>COPYRIGHT © 2018 NewInk Technologies, inc. All Rights Reserved</p>
                        {/* <p>ALL RIGHTS RESERVED.</p> */}
                 </div>
                {/* </div> */}
            </div>
        );
    }
}

export default Footer;