import React, { Component } from "react";
import Teens from "./teens/Teens";
import TeensEvents from "./teens/TeensEvents";
import TeensGallery from "./teens/TeensGallery";

export default class TeensMinistry extends Component {
  render() {
    return (
      <div>
        <Teens />
        <h1 className="text-center">Events</h1>
        <TeensEvents />
        <h1 className="text-center">Gallery</h1>
        <TeensGallery />
      </div>
    );
  }
}
