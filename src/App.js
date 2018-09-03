// imports
import React, { Component } from 'react';
import HeaderMenu from "./components/HeaderMenu/newlinkHeaderMenu";
import HeroImage from "./components/heroImage/index";
import Ourservices from "./components/ourServices/index";
import WhychooseUs from "./components/whyChooseUs/index";
import AboutUs from "./components/Aboutus/index"

class App extends Component {
  render() {
    return(
      // <HeaderMenu />
      <div>
        <HeroImage />
        <AboutUs  />
      </div>
    )
  }
}

export default App;

// #0f1628