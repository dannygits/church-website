import React, { Component } from "react";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Pastor from "./about/eldership/Pastor";
import Elder from "./about/eldership/Elder";
import Presbyter from "./about/eldership/Presbyter";
import Ministries from "./ministries/Ministries";
import MenMinistry from "./ministries/MenMinistry";
import WomenMinistry from "./ministries/WomenMinistry";
import YouthMinistry from "./ministries/YouthMinistry";
import TeensMinistry from "./ministries/TeensMinistry";
import ChildrenMinistry from "./ministries/ChildrenMinistry";
class Contents extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/ministries" component={Ministries} />
            <Route exact path="/pastor" component={Pastor} />
            <Route exact path="/elder" component={Elder} />
            <Route exact path="/presbyter" component={Presbyter} />
            <Route exact path="/men" component={MenMinistry} />
            <Route exact path="/women" component={WomenMinistry} />
            <Route exact path="/youth" component={YouthMinistry} />
            <Route exact path="/teens" component={TeensMinistry} />
            <Route exact path="/children" component={ChildrenMinistry} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default Contents;
