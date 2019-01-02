import React from "react";
import "./index.css";
import Header from "../HeaderMenu/newlinkHeaderMenu";
import $ from "jquery";

class HeroImage extends React.Component {

    render() {
        return (
            <div>
                <div className="heroimage-main-div" >

                </div>
                <div className="heroimage-header-div" >
                    <Header />
                </div>
                <div className="heroimage-text-div" >
                    <p className="heroimage-subtext-p" >WE WORK HARD, WE PLAY HARD</p>
                    <p className="heroimage-maintext-p" > We are a web</p>
                    <p className="heroimage-maintext-p">design agency</p>
                    {/* <p>
                    Bestowed with high professionalism,
                            we are capable of offering incredible web design
                            and web development services to our valued clients
                            overseas with complete contentment.
            </p> */}
                    <button className="heroimage-connect-btn" >EXPLORE WORK</button>
                </div>
            </div>
        )
    }
}

export default HeroImage;