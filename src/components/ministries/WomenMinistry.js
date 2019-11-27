import React, { Component } from "react";
import Women from "./women/Women";
import WomenEvents from "./women/WomenEvents";
import WomenGallery from "./women/WomenGallery";

export default class WomenMinistry extends Component {
  render() {
    return (
      <div>
        <Women />
        <h1 className="text-center">Events</h1>
        <WomenEvents />
        <h1 className="text-center">Gallery</h1>
        <WomenGallery />
      </div>
    );
  }
}
