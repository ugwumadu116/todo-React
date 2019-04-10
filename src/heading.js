import React, { Component } from "react";
import img from "./img/pass2.jpg";
class Heading extends Component {
  render() {
    return (
      <div id="heading">
        <div className="left">
          <img src={img} alt="Here Please" /> <span>Daily UI</span>
        </div>
        <div className="right">
          <span>
            <i className="fa fa-bell" aria-hidden="true" />
          </span>
          <span>
            <i className="fa fa-cog" aria-hidden="true" />
          </span>
        </div>
      </div>
    );
  }
}

export default Heading;
