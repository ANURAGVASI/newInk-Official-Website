import React from "react";
import "./index.css";
import { FaDesktop, FaArrowRight } from 'react-icons/fa';

class Services extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="services-main-div" className="services-main-div row ">
        <div className="services-about-div col-md-5">
          <p className="services-about-heading-p">WHAT WE DO THE BEST</p>
          <p className="services-about-tagline-p">
            A digital studio crafting beautiful experiences
          </p>
          <p className="services-about-text-p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.

          </p>
          <button className="services-about-letstalk-btn">Let's Talk</button>
        </div>
        <div className="services-servicelist-div col-md-7">
          <div className="testclass row">
            <div className="services-service-div col-md-5">
              <div><FaDesktop className="services-serviceicon-ri" /></div>
              <p className="services-servicename-p" >Web Development</p>
              <p className="service-servicedesc-p" >
                Lorem Ipsum is simply text the printing and typesetting standard industry.
                Lorem Ipsum is simply text the printing and typesetting standard industry.
              </p>
              {/* <p className="services-serviceknowmore-p" >
                <a className="services-serviceknowmore-a">Know more <FaArrowRight className="services-arrowicon-ri" /> </a>
              </p> */}
            </div>
            <div className="services-service-div col-md-5">
              <div><FaDesktop className="services-serviceicon-ri" /></div>
              <p className="services-servicename-p" >Web Development</p>
              <p className="service-servicedesc-p" >
                Lorem Ipsum is simply text the printing and typesetting standard industry.
                Lorem Ipsum is simply text the printing and typesetting standard industry.
            </p>
              {/* <p className="services-serviceknowmore-p" >
                <a className="services-serviceknowmore-a">Know more <FaArrowRight className="services-arrowicon-ri" /> </a>
              </p> */}
            </div>
          </div>
          <div className="testclass row">
            <div className="services-service-div col-md-5">
              <div><FaDesktop className="services-serviceicon-ri" /></div>
              <p className="services-servicename-p" >Web Development</p>
              <p className="service-servicedesc-p" >
                Lorem Ipsum is simply text the printing and typesetting standard industry.
                Lorem Ipsum is simply text the printing and typesetting standard industry.
          </p>
              {/* <p className="services-serviceknowmore-p" >
                <a className="services-serviceknowmore-a">Know more <FaArrowRight className="services-arrowicon-ri" /> </a>
              </p> */}
            </div>
            <div className="services-service-div col-md-5">
              <div ><FaDesktop className="services-serviceicon-ri" /></div>
              <p className="services-servicename-p" >Web Development</p>
              <p className="service-servicedesc-p" >
                Lorem Ipsum is simply text the printing and typesetting standard industry.
                Lorem Ipsum is simply text the printing and typesetting standard industry.
        </p>
              {/* <p className="services-serviceknowmore-p" >
                <a className="services-serviceknowmore-a">Know more <FaArrowRight className="services-arrowicon-ri" /> </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
