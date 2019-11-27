import React, { Component } from "react";
import { Card, CardTitle, CardImg, CardImgOverlay, Row, Col } from "reactstrap";

export default class ChildenEvents extends Component {
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
                <CardImgOverlay>
                  <br /> <br />
                  <CardTitle>
                    <h1>Event one</h1>
                  </CardTitle>
                  <br /> <br />
                </CardImgOverlay>
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
                <CardImgOverlay>
                  <br /> <br />
                  <CardTitle>
                    <h1>Event two</h1>
                  </CardTitle>
                  <br /> <br />
                </CardImgOverlay>
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
                <CardImgOverlay>
                  <br /> <br />
                  <CardTitle>
                    <h1>Event three</h1>
                  </CardTitle>
                  <br /> <br />
                </CardImgOverlay>
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
                <CardImgOverlay>
                  <br /> <br />
                  <CardTitle>
                    <h1>Event four</h1>
                  </CardTitle>
                  <br /> <br />
                </CardImgOverlay>
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
                <CardImgOverlay>
                  <br /> <br />
                  <CardTitle>
                    <h1>Event five</h1>
                  </CardTitle>
                  <br /> <br />
                </CardImgOverlay>
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
                <CardImgOverlay>
                  <br /> <br />
                  <CardTitle>
                    <h1>Event six</h1>
                  </CardTitle>
                  <br /> <br />
                </CardImgOverlay>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
