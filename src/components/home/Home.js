import React, { Component } from "react";
import Carousel from "./Carousel";
import Infocards from "./Infocards";
import Contact from "./Contact";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Infocards />
        <Contact />
      </div>
    );
  }
}
