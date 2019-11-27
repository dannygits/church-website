import React, { Component } from "react";
import Youth from "./youth/Youth";
import YouthEvent from "./youth/YouthEvent";
import YouthGallery from "./youth/YouthGallery";

export default class YouthMinistry extends Component {
  render() {
    return (
      <div>
        <Youth />
        <h1 className="text-center">Events</h1>
        <YouthEvent />
        <h1 className="text-center">Gallery</h1>
        <YouthGallery />
      </div>
    );
  }
}
