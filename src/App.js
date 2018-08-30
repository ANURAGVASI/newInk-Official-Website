// imports
import React, { Component } from 'react';
import HeaderMenu from "./components/HeaderMenu/newlinkHeaderMenu";
import HeroImage from "./components/heroImage/index";

class App extends Component {
  render() {
    return(
      // <HeaderMenu />
      <div>
      <HeaderMenu />
      <HeroImage />
      </div>
    )
  }
}

export default App;
