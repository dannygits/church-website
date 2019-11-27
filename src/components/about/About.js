import React, { Component } from "react";
import Description from "./Description";
import Eldership from "./Eldership";

export default class About extends Component {
  render() {
    return (
      <div>
        <Description />
        <Eldership />
      </div>
    );
  }
}
