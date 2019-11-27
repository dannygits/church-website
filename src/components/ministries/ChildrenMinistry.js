import React, { Component } from "react";
import Children from "./children/Children";
import ChildenEvents from "./children/ChildenEvents";
import ChildrenGallery from "./children/ChildrenGallery";

export default class ChildrenMinistry extends Component {
  render() {
    return (
      <div>
        <Children />
        <h1 className="text-center">Events</h1>
        <ChildenEvents />
        <h1 className="text-center">Gallery</h1>
        <ChildrenGallery />
      </div>
    );
  }
}
