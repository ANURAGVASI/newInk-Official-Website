import React from "react";
import "./index.css";

class OurServices extends React.Component{
    render(){
        return(
            <div className="ourservices-main-div">
                <div className="ouservices-heading-p" >
                    <h1 className="ourservices-heading-h1" >Our Services</h1>
                </div>
                <div className="ourservices-description-div" >
                    {/* Row start */}
                        <div className="col-md-6" >
                            <h1 className="webdev-heading-p" >UI/UX Development</h1>
                            <div  className="webdev-points-div" >
                                <p className="service-point-p" >
                                    <div style={{float:"left"}} ><span className="service-point-icon" ><i class="fa fa-code" aria-hidden="true"></i></span></div>
                                    <div className="service-point-div"><span  className="service-point-span">Manage your blockchain backend in a simple dashboard</span></div>
                                </p> 
                                <p className="service-point-p" >
                                    <div style={{float:"left"}} ><span className="service-point-icon" ><i class="fa fa-code" aria-hidden="true"></i></span></div>
                                    <div className="service-point-div" ><span className="service-point-span" >Communicate with the blockchain through straight HTTP calls</span></div>
                                </p> 
                                <p className="service-point-p" >
                                    <div style={{float:"left"}} ><span className="service-point-icon" ><i class="fa fa-code" aria-hidden="true"></i></span></div>
                                    <div className="service-point-div"><span className="service-point-span" >STRATO is the easiest way to build a blockchain app</span></div>
                                </p> 
                            </div>
                        </div>
                        <div className="col-md-6" >
                            <img src={require("../../images/service1.png")} />
                        </div>
                    {/* Row end */}
                </div>
            </div>
        )
    }
}

export default OurServices;