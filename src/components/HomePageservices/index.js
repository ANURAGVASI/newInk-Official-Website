import React from "react";
import "./index.css";

class HomeServices extends React.Component{
    render(){
        return (
            <div className="homeservices-main-div" >

                {/*Left Panel Services heading and little about our services */}
                http://foundry.mediumra.re/chooser.html  <div className="col-md-5" >
                    <div>
                        <p className="homeservices-leftheading-p">
                            APIs to create what you imagine, without compromise.
                        </p>
                        <hr />
                        <p className="homeservices-leftlines-p" >
                            Twilio was made for creators like you. We build our APIs to be simple to use, 
                            powerful in production, and endlessly scalable.
                        </p>
                    </div>
                </div>

                {/* Right Panel Services list and description */}
                <div className="col-md-7" >
                    <div className="homeservices-servicelist-div" >
                        {/* UI?UX Service */}
                        <div></div>
                        {/* Web Development Service */}
                        <div></div>
                        {/* Mbile Development */}
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeServices;