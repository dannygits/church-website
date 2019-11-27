import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  Row,
  Col,
  CardTitle,
  NavLink
} from "reactstrap";

export default class Presbyters extends Component {
  render() {
    return (
      <div>
        <section className="tab-content">
          <div id="tab-1-content" className="tab-content-item show">
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <NavLink href="/presbyter">
                  <Card className="presbyter">
                    <CardImg
                      top
                      height="50%"
                      width="50%"
                      src="/img/bg.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <br /> <br />
                      <CardTitle>
                        <h1>Presbyter's name</h1>
                      </CardTitle>
                      <br /> <br />
                    </CardBody>
                  </Card>
                </NavLink>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    );
  }
}
