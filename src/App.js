// imports
import React, { Component } from 'react';
import HeaderMenu from "./components/HeaderMenu/newlinkHeaderMenu";
import HeroImage from "./components/heroImage/index";
import HeroVedio from "./components/HeroVedio/HeroVedio";
import Ourservices from "./components/ourServices/index";
import WhyChooseUs from "./components/whyChooseUs/index";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/Aboutus/index";
import ContactForm from "./components/ContactForm/ContactForm";
import Services from "./components/Services/services";

class App extends Component {
  render() {
    return(
      <div>
        {/* <HeroVedio /> */}
        <HeroImage />
        <AboutUs/>
        <WhyChooseUs />
        <Services />
        <Footer/>
      </div>
    )
  }
}

export default App;
