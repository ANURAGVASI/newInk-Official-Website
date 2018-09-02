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
        {/* <Ourservices /> */}
      </div>
    )
  }
}

export default App;

// http://startit.select-themes.com/product-landing-page-ii/
// background-image: linear-gradient(to right, #aeeedf 10% , #3cb699 90% , #53c2a8  );
// background-image: linear-gradient(to right, #d9f0ec 10% , #8ce9de 90% , #beece7);