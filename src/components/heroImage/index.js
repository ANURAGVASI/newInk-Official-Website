import React from "react";
import "./index.css";
import Header from "../HeaderMenu/newlinkHeaderMenu";
import $ from "jquery";

class HeroImage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            heroImageWords: ["Creative", "Awsome", "Disciplined"],
            heroImageWordIndex: 0
        }
    }


    componentWillUpdate(){
        document.getElementsByClassName("heroimage-maintext-wordchanger")[0].style.opacity=0;
        
    }

    componentDidUpdate(){
        // $(".heroimage-maintext-wordchanger").css("color","red");
        $(".heroimage-maintext-wordchanger").animate({
            opacity: 1
        }, 2000, () => {
            document.getElementsByClassName("heroimage-maintext-wordchanger")[0].style.opacity=0;
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
            <div  className="heroimage-main-div" >
                    <div className="heroimag-text-div" >
                        <p className="heroimage-maintext-p" >
                            We Are 
                            
                            <span className="heroimage-maintext-wordchanger">
                                {heroImageWords[heroImageWordIndex]}
                            </span>
                           <div style={{display:"none"}} >{
                                setTimeout(() => {
                                    this.changeWord(heroImageWordIndex);
                                }, 2000)
                           }
                           </div>
                           
                        </p>
                    </div>
            </div>
        )
    }
}

export default HeroImage;