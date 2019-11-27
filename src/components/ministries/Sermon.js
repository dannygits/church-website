import React, { Component } from "react";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";

export default class Sermon extends Component {
  render() {
    return (
      <div className="word">
        <Row>
          <Col sm="4">
            <Card body className="preaching">
              <CardTitle>Audio sermons</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </Card>
          </Col>
          <Col sm="4">
            <Card body className="preaching">
              <CardTitle>Video Sermons</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </Card>
          </Col>
          <Col sm="4">
            <Card body className="preaching">
              <CardTitle>text Sermons</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
