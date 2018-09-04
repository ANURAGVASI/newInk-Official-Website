// imports
import React, { Component } from 'react';
import HeaderMenu from "./components/HeaderMenu/newlinkHeaderMenu";
import HeroImage from "./components/heroImage/index";
import Ourservices from "./components/ourServices/index";
import WhyChooseUs from "./components/whyChooseUs/index";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/Aboutus/index";

class App extends Component {
  render() {
    return(
      <div>
        <HeroImage />
        <AboutUs/>
        <WhyChooseUs />
        <Footer/>
      </div>
    )
  }
}

export default App;
