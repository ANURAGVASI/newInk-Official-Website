// Library imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// components import
import HeaderMenu from "./components/HeaderMenu/newlinkHeaderMenu";
import HeroImage from "./components/heroImage/index";
import HeroVedio from "./components/HeroVedio/HeroVedio";
import Ourservices from "./components/ourServices/index";
import WhyChooseUs from "./components/whyChooseUs/index";
import Footer from "./components/Footer/Footer";
import Aboutus from "./components/Aboutus/index";
import ContactForm from "./components/ContactForm/ContactForm";
import Services from "./components/Services/services";

class App extends Component {
  render() {
    return(
      
        <Router>
          <div>
            <Route path="/about" render={(props) => (
              <React.Fragment>
                  {/* <WhyChooseUs/> */}
                  <Aboutus/>
              </React.Fragment>
            )}/>
            <Footer/>
          </div>
        </Router>
    )
  }
}

export default App;
