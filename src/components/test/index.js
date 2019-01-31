import React, { Component } from "react";
import "./index.css";

class JoiningCircles extends Component {
  state = {};
  render() {
    return (
      <div className="main-circle">
        <div className="circle" />
        <div className="line" />
        <div className="circle" />
        <div className="line" />
        <div className="circle" />
        <div className="line" />
        <div className="circle" />
        <div className="line" />
        <div className="circle" />
      </div>
    );
  }
}

export default JoiningCircles;
