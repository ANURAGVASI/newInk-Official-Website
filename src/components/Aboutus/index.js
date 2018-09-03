import React from "react";
import "./index.css";

class Aboutus extends React.Component{
    render(){
        return(
            <div className="aboutus-main-div">
                <div className="aboutus-submain-div" >
                    <p className="aboutus-leftheading-p" > 
                        An agency founded on the principles of Honesty, Clarity, Simplicity.
                    </p>
                    <div className="aboutus-right-div" >
                        <p >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <br/>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <br/>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>

                    {/* <div className="aboutus-getintouchbtn-div" >
                        <button className="aboutus-getintouchbtn-btn btn btn-primary" >Let's Talk</button>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Aboutus;