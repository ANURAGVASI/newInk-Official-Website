// Library imports
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// components import
import Header from "./components/HeaderMenu/newlinkHeaderMenu";
import HeroImage from "./components/heroImage/index";
import HeroVedio from "./components/HeroVedio/HeroVedio";
import Services from "./components/Services/index";
import WhyChooseUs from "./components/whyChooseUs/index";
import Footer from "./components/Footer/Footer";
import Aboutus from "./components/Aboutus/index";
import ContactForm from "./components/ContactForm/ContactForm";
import ConnectUs from "./components/ConnectUS/index";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <HeroImage />
          <Services />
          <Route
            path="/about"
            render={props => (
              <React.Fragment>
                <Aboutus />
              </React.Fragment>
            )}
          />
          {/* <ConnectUs /> */}
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
