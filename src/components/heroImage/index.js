import React from "react";
import "./index.css";
import Header from "../HeaderMenu/newlinkHeaderMenu";
import $ from "jquery";

class HeroImage extends React.Component{

    render(){
        return(
            <div>
                <div className="heroimage-main-div" >
                    {/*  */}
                    {/* <Header /> */}
                    <div className="heroimage-content-div">
                        <div className="heroimage-taglines-div" >
                            <div className="heroimage-maintaglines-div" >
                                <p className="heroimage-maintext-p " >
                                    We Craft Digital Experiences
                                    {/* <span id="heroimage-maintext-wordchangerid" className="heroimage-maintext-wordchanger" >
                                        {heroImageWords[heroImageWordIndex]}
                                    </span> */}
                                </p>
                            </div>
                            <p className="heroimage-subtext-p" > 
                            Bestowed with high professionalism, 
                            we are capable of offering incredible web design 
                            and web development services to our valued clients 
                            overseas with complete contentment.
                            </p>

                        </div>
                    </div>
                </div>
                <div>
                    <p className="heroimage-subtext-p-640media" > 
                        Bestowed with high professionalism, 
                        we are capable of offering incredible web design 
                        and web development services to our valued clients 
                        overseas with complete contentment.
                    </p>
                </div>
            </div>
        )
    }
}

export default HeroImage;