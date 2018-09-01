import React from "react";
import "./index.css";
import Header from "../HeaderMenu/newlinkHeaderMenu";
import $ from "jquery";

class HeroImage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            heroImageWords: ["Creative.", "Awsome.", "Disciplined."],
            heroImageWordIndex: 0
        }
    }

    componentWillUpdate(){
        $( "#heroimage-maintext-wordchangerid" ).animate({
            opacity: 0,
          }, 0)
    }

    componentDidUpdate(){
        $( "#heroimage-maintext-wordchangerid" ).animate({
            opacity: 1,
          }, 800, function() {
            // Animation complete.
           
          });
    }
    
    

    changeWord = (index) => {
        if(index===2){
            index=0;
        }
        else{
            index++;
        }
        this.setState({heroImageWordIndex: index});
    }
    render(){
        
        const {heroImageWords, heroImageWordIndex } = this.state;
        return(
            <div className="heroimage-main-div" >
                <Header />
                <div className="col-md-6" >
                    <p className="heroimage-maintext-p" >
                        We Craft Digital Solutions
                        <span id="heroimage-maintext-wordchangerid" className="heroimage-maintext-wordchanger" >
                            {heroImageWords[heroImageWordIndex]}
                        </span>
                    </p>

                    <p className="heroimage-subtext-p" > Empowering Digital Solutions for Tommorow's World. Empowering Digital Solutions for Tommorow's World.
                    Empowering Digital Solutions for Tommorow's World </p>

                    <div className="heroimage-learnmore-div" >
                        <button className="heroimage-learnmore-btn" >Learn more</button>
                    </div>
                </div>
                <div className="col-md-6"  >
                    <img className="heroimage-sideimage-img" width="550" height="300"   src={require("../../images/lappis1.png")} />
                </div>

                {/* <p className="heroimage-downarrow-p" ><i className="fa fa-angle-double-down" aria-hidden="true"></i></p> */}

                
                {/* change word for every 4 seconds */}
                <div style={{display:"none"}} >
                   {
                        setTimeout(() => {
                            this.changeWord(heroImageWordIndex)
                        }, 4000)
                   }
                </div>
            </div>
        )
    }
}

export default HeroImage;