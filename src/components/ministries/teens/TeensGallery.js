import React, { Component } from "react";
import { Card, CardImg, Row, Col } from "reactstrap";

export default class TeensGallery extends Component {
  render() {
    return (
      <div>
        <div className="randomized-gallery">
          <Row>
            <Col md="4">
              <Card inverse className="department">
                <CardImg
                  top
                  height="50%"
                  width="50%"
                  src="/img/bg.jpg"
                  alt="Card image cap"
                />
              </Card>
            </Col>
            <Col md="4">
              <Card inverse className="department">
                <CardImg
                  top
                  height="50%"
                  width="50%"
                  src="/img/bg.jpg"
                  alt="Card image cap"
                />
              </Card>
            </Col>
            <Col md="4">
              <Card inverse className="department">
                <CardImg
                  top
                  height="50%"
                  width="50%"
                  src="/img/bg.jpg"
                  alt="Card image cap"
                />
              </Card>
            </Col>
            <Col md="4">
              <Card inverse className="department">
                <CardImg
                  top
                  height="50%"
                  width="50%"
                  src="/img/bg.jpg"
                  alt="Card image cap"
                />
              </Card>
            </Col>
            <Col md="4">
              <Card inverse className="department">
                <CardImg
                  top
                  height="50%"
                  width="50%"
                  src="/img/bg.jpg"
                  alt="Card image cap"
                />
              </Card>
            </Col>
            <Col md="4">
              <Card inverse className="department">
                <CardImg
                  top
                  height="50%"
                  width="50%"
                  src="/img/bg.jpg"
                  alt="Card image cap"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
