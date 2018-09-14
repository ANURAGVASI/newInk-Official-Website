import React, { Component } from 'react';
import "./HeroVedio.css"

class HeroVedio extends Component {
    render() {
        return (
            <div className="herovedio-main-div" >
                <div>
                    <video  className="herovedio-vedio" preload="none" playsinline autoPlay muted loop>
                    <source src={require("../../images/herovideo.mp4")} type="video/mp4"/>
                    Your browser does not support the video tag.
                    </video>

                </div>
            </div>
        );
    }
}

export default HeroVedio;