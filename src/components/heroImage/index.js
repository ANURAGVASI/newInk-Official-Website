import React from "react";
import "./index.css";
import Header from "../HeaderMenu/newlinkHeaderMenu";
import $ from "jquery";

class HeroImage extends React.Component {


  render() {
    return (
      <div id="myCarousel" className=" carousel slide" data-ride="carousel">
        {/* <!-- Indicators --> */}
        <ol className="services-dots-ol carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>


        {/* <!-- Wrapper for slides --> */}
        <div className="carousel-inner">

          {/* Hero Screen 0 */}
          <div className="item c0 active">
            <div className="heroimage-text-div">
              <p className="heroimage-subtext-p">WE WORK HARD, WE PLAY HARD</p>
              <p className="heroimage-maintext-p">A print & digital</p>
              <p className="heroimage-maintext-p">creative studio</p>

              <button className="heroimage-connect-btn">EXPLORE WORK</button>
            </div>
          </div>
          {/* Hero Screen 1 */}
          <div className="item c1 ">

            <div className="heroimage-text-div">
              <p className="heroimage-subtext-p">WE WORK HARD, WE PLAY HARD</p>
              <p className="heroimage-maintext-p"> We are a web</p>
              <p className="heroimage-maintext-p">design agency</p>
              <button className="heroimage-connect-btn">EXPLORE WORK</button>
            </div>
          </div>

          {/* Hero Screen 2 */}
          <div className="item c2">
            <div className="heroimage-text-div">
              <p className="heroimage-subtext-p">WE WORK HARD, WE PLAY HARD</p>
              <p className="heroimage-maintext-p"> We are delivering</p>
              <p className="heroimage-maintext-p">beautiful products</p>
              <button className="heroimage-connect-btn">EXPLORE WORK</button>
            </div>
          </div>
        </div>

        {/* <!-- Left and right controls --> */}
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>

      </div>
    );
  }

  componentWillUnmount() {
    clearInterval(this.backgroundImageTimer);
  }
}

export default HeroImage;


{/* <div className="carousel-indicators " >
          <span data-target="#myCarousel" data-slide-to="0" className="active services-dot-span"  ></span>
          <span data-target="#myCarousel" data-slide-to="1" className="services-dot-span" ></span>
          <span data-target="#myCarousel" data-slide-to="2" className="services-dot-span"></span>
        </div> */}