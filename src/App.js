// imports
import React, { Component } from 'react';
import HeaderMenu from "./components/HeaderMenu/newlinkHeaderMenu";
import HeroImage from "./components/heroImage/index";
import Ourservices from "./components/ourServices/index";

class App extends Component {
  render() {
    return(
      // <HeaderMenu />
      <div>
        
        <HeroImage />
        <Ourservices />
      </div>
    )
  }
}

export default App;
