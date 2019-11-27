import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardImg,
  CardImgOverlay,
  Row,
  Col,
  Container,
  NavLink
} from "reactstrap";

export default class Departments extends Component {
  render() {
    return (
      <div className="container departments">
        <div>
          <Row>
            <Col md="4">
              <NavLink href="/men">
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
                      <h1>Men's Ministry</h1>
                    </CardTitle>
                    <br /> <br />
                  </CardImgOverlay>
                </Card>
              </NavLink>
            </Col>
            <Col md="4">
              <NavLink href="/women">
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
                      <h1>Women's Ministry</h1>
                    </CardTitle>
                    <br /> <br />
                  </CardImgOverlay>
                </Card>
              </NavLink>
            </Col>
            <Col md="4">
              <NavLink href="/youth">
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
                      <h1>Youth Ministry</h1>
                    </CardTitle>
                    <br /> <br />
                  </CardImgOverlay>
                </Card>
              </NavLink>
            </Col>
          </Row>
          <Container className="bottom-part">
            <Row>
              <Col md="6">
                <NavLink href="/teens">
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
                        <h1>Teen's Ministry</h1>
                      </CardTitle>
                      <br /> <br />
                    </CardImgOverlay>
                  </Card>
                </NavLink>
              </Col>
              <Col md="6">
                <NavLink href="/children">
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
                        <h1>Children's Ministry</h1>
                      </CardTitle>
                      <br /> <br />
                    </CardImgOverlay>
                  </Card>
                </NavLink>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
