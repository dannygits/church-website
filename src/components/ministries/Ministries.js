import React, { Component } from "react";
import Departments from "./Departments";
import Sermons from "./Sermons";

export default class Ministries extends Component {
  render() {
    return (
      <div>
        <Departments />
        <Sermons />
      </div>
    );
  }
}
