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
                {/*  */}
                <Header />
                <div className="heroimage-content-div container">
                <div className="col-md-6">
                    <div className="heroimage-taglines-div" >
                        <div className="heroimage-maintaglines-div" >
                            <p className="heroimage-maintext-p " >
                                Fresh.
                                {/* <span id="heroimage-maintext-wordchangerid" className="heroimage-maintext-wordchanger" >
                                    {heroImageWords[heroImageWordIndex]}
                                </span> */}
                            </p>
                            <p className="heroimage-maintext-p">
                                Beautiful.
                                {/* <span id="heroimage-maintext-wordchangerid" className="heroimage-maintext-wordchanger" >
                                    {heroImageWords[heroImageWordIndex]}
                                </span> */}
                            </p>
                            <p className="heroimage-maintext-p" >
                                Innovative.
                                {/* <span id="heroimage-maintext-wordchangerid" className="heroimage-maintext-wordchanger" >
                                    {heroImageWords[heroImageWordIndex]}
                                </span> */}
                            </p>
                        </div>
                        <p className="heroimage-subtext-p" > 
                            Bestowed with high professionalism, we are capable of offering incredible web design,
                            mobile application development, digital marketing services and 
                            solutions to our valued clients overseas with complete contentment.
                        </p>

                        {/* <div className="heroimage-learnmore-div" >
                            <button className="btn btn-primary heroimage-learnmore-btn" >Learn more</button>
                        </div> */}
                        <nav class="intro__content__nav btn-group btn-group--collapsed is-hidden--sm-down">
                            <a class="btn btn--md btn--line" href="/#strategy">Strategy</a>
                            <a class="btn btn--md btn--line" href="/#user-experience">User Experience</a>
                            <a class="btn btn--md btn--line" href="/#web-design">Web Design</a>
                            <a class="btn btn--md btn--line" href="/#marketing">Digital Marketing</a>
                        </nav>
                    </div>
                </div>
                {/* <div className="col-md-6 testmd"  >
                    <img className="heroimage-sideimage-img"    src={require("../../images/responsiveness2.gif")} />
                      
                </div> */}

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
            </div>
        )
    }
}

export default HeroImage;