// imports
import React, { Component } from 'react';
import HeaderMenu from "./components/HeaderMenu/newlinkHeaderMenu";
import HeroImage from "./components/heroImage/index";
import Ourservices from "./components/ourServices/index";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return(
      <div>
        <HeroImage />
        <Footer/>
      </div>
    )
  }
}

export default App;
