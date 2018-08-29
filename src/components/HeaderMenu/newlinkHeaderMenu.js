import React, {Component} from "react";
import "./newlinkeHeaderMenu.css";

class Header extends Component{
    render(){
        return(
            <div className="newlink-header-div" >
                <nav className="navbar  navbar-custom">
                    {/* <!-- button for collapsing the menu  --> */}
                    <div className="navbar-header ">
                        <button onClick={(e) => {e.preventDefault();}} type="button" id="collapse-button" className="navbar-toggle menu-expand-btn-custom " data-toggle="collapse" data-target="#myNavbar">
                            {/* <i className="fa fa-bars" aria-hidden="true"></i>                       */}
                            Expand
                        </button>
                        <span className="navbar-brand logo-text" href="#">newInk</span>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav pull-right">
                            {/* <li className="active"><a className="logo-link" href="#">HOME</a></li> */}
                            <li><a className="logo-link" href="#about-jump">Home</a></li>
                            <li><a className="logo-link" href="#gallery-jump">Services</a></li>
                            <li><a className="logo-link" href="#service-jump">Templates</a></li>
                            <li><a className="logo-link" href="#service-jump">Expertise</a></li>
                            <li><a className="logo-link" href="#contact-jump">About</a></li>
                            <li><a className="logo-link" href="#contact-jump"><button className="btn btn-primary menu-getintouch-btn" >Get in Touch</button></a></li>
                            
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;