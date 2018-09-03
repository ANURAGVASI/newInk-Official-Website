import React, { Component } from 'react';
import "./index.css";

class WhyChooseUs extends Component {
    render() {
        return (
            <div className="chooseus-div" >
            <div className="chooseus-main-div" >
                <p className="chooseus-mainheading-p" >Our Key Features</p>
                {/* row-1 */}
                <div className="chooseus-row1-div" >
                    <div className="col-md-4" >
                        <div className="chooseus-featureicon-div" >
                            {/* font awsome icon */}
                            <i class="fa fa-th-large" aria-hidden="true"></i>
                        </div>
                        <div className="chooseus-feature-div" >
                            <p className="chooseus-featureheading-p" >MODULAR DESIGN</p>
                            <p className="chooseus-featuretext-p" >Foundry has been built from the ground-up as a modular framework. This makes assembling unique and interesting layouts a breeze.</p>
                        </div>
                    </div>
                    <div className="col-md-4" >
                            <div className="chooseus-featureicon-div" >
                            {/* font awsome icon */}
                            <i class="fa fa-th-large" aria-hidden="true"></i>
                            </div>
                            <div className="chooseus-feature-div">
                                <p className="chooseus-featureheading-p">MODULAR DESIGN</p>
                                <p className="chooseus-featuretext-p">Foundry has been built from the ground-up as a modular framework. This makes assembling unique and interesting layouts a breeze.</p>
                            </div>
                    </div>
                    <div className="col-md-4" >
                        <div className="chooseus-featureicon-div" >
                        {/* font awsome icon */}
                        <i class="fa fa-th-large" aria-hidden="true"></i>
                        </div>
                        <div className="chooseus-feature-div">
                            <p className="chooseus-featureheading-p">MODULAR DESIGN</p>
                            <p className="chooseus-featuretext-p">Foundry has been built from the ground-up as a modular framework. This makes assembling unique and interesting layouts a breeze.</p>
                        </div>
                    </div>
                </div>
                {/* Row-2 */}
                <div className="chooseus-row2-div" >
                <div className="col-md-4" >
                    <div className="chooseus-featureicon-div" >
                    {/* font awsome icon */}
                    <i class="fa fa-th-large" aria-hidden="true"></i>
                    </div>
                    <div className="chooseus-feature-div">
                        <p className="chooseus-featureheading-p">DEDICATED SUPPORT</p>
                        <p className="chooseus-featuretext-p">We aim to support you in a timely and effective manner via our dedicated support system. Support is free for 6 months with your purchase.</p>
                    </div>
                </div>
                <div className="col-md-4" >
                    <div className="chooseus-featureicon-div" >
                    {/* font awsome icon */}
                    <i class="fa fa-th-large" aria-hidden="true"></i>
                    </div>
                    <div className="chooseus-feature-div">
                        <p className="chooseus-featureheading-p">MODULAR DESIGN</p>
                        <p className="chooseus-featuretext-p">Foundry has been built from the ground-up as a modular framework. This makes assembling unique and interesting layouts a breeze.</p>
                    </div>
                </div>
                <div className="col-md-4" >
                    <div className="chooseus-featureicon-div" >
                    {/* font awsome icon */}
                    <i class="fa fa-th-large" aria-hidden="true"></i>
                    </div>
                    <div className="chooseus-feature-div">
                        <p className="chooseus-featureheading-p">BUILT FOR PERFORMANCE</p>
                        <p className="chooseus-featuretext-p">We've made fast, graceful loading a priority. Don't make your users wait around with a loading spinner - serve them content, fast.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default WhyChooseUs;