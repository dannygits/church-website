import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Sermon from "./Sermon";
import RGallery from "./RGallery";

export default class Sermons extends Component {
  state = {
    tabIndex: 0
  };
  render() {
    return (
      <div>
        <Tabs
          className="tabs"
          selectedIndex={this.state.tabIndex}
          onSelect={tabIndex => this.setState({ tabIndex })}
        >
          <TabList className="container">
            <Tab className={`${this.state.tabIndex === 0 ? "tab-item" : null}`}>
              <p>sermons</p>
            </Tab>
            <Tab className={`${this.state.tabIndex === 1 ? "tab-item" : null}`}>
              <p>gallery</p>
            </Tab>
          </TabList>
          <TabPanel>
            <Sermon />
          </TabPanel>
          <TabPanel>
            <RGallery />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
