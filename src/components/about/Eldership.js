import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Presbyters from "./Presbyters";
import Pastors from "./Pastors";
import Elders from "./Elders";

export default class Eldership extends Component {
  state = {
    tabIndex: 0
  };
  render() {
    return (
      <div>
        <Tabs
          className="eldership"
          selectedIndex={this.state.tabIndex}
          onSelect={tabIndex => this.setState({ tabIndex })}
        >
          <TabList className="container">
            <Tab className={`${this.state.tabIndex === 0 ? "tab-item" : null}`}>
              <p>presbyter</p>
            </Tab>
            <Tab className={`${this.state.tabIndex === 1 ? "tab-item" : null}`}>
              <p>pastors</p>
            </Tab>
            <Tab className={`${this.state.tabIndex === 2 ? "tab-item" : null}`}>
              <p>elders</p>
            </Tab>
          </TabList>
          <TabPanel>
            <Presbyters />
          </TabPanel>
          <TabPanel>
            <Pastors />
          </TabPanel>
          <TabPanel>
            <Elders />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
