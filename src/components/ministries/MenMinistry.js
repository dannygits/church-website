import React, { Component } from "react";
import Men from "./men/Men";
import Events from "./men/Events";
import MensGallery from "./men/MensGallery";

export default class MenMinistry extends Component {
  render() {
    return (
      <div>
        <Men />
        <h1 className="text-center">Events</h1>
        <Events />
        <h1 className="text-center">Gallery</h1>
        <MensGallery />
      </div>
    );
  }
}
