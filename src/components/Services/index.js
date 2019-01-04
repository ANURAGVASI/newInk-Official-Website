import React from "react";
import "./index.css";

class Services extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="services-main-div" className="services-main-div ">
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
              Elegant / Unique design Donec tempor lorem felis fringilla Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. It has survived not only five centuries.
            </div>
            <div className=" services-service-div col-md-5">
              Elegant / Unique design Donec tempor lorem felis fringilla Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. It has survived not only five centuries.
            </div>
          </div>
          <div className="testclass row">
            <div className=" services-service-div col-md-5">
              Elegant / Unique design Donec tempor lorem felis fringilla Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. It has survived not only five centuries.
            </div>
            <div className="services-service-div col-md-5">
              Elegant / Unique design Donec tempor lorem felis fringilla Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. It has survived not only five centuries.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
