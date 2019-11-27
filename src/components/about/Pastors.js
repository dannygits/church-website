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

export default class Pastors extends Component {
  render() {
    return (
      <div className="eldership">
        <section className="tab-content">
          <div id="tab-2-content" className="tab-content-item">
            <Row>
              <Col lg="4">
                <NavLink href="/pastor">
                  <Card className="presbytry">
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
                        <h1>Pastor's name</h1>
                      </CardTitle>
                      <br /> <br />
                    </CardBody>
                  </Card>
                </NavLink>
              </Col>
              <Col lg="4">
                <NavLink href="/pastor">
                  <Card className="presbytry">
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
                        <h1>Pastor's name</h1>
                      </CardTitle>
                      <br /> <br />
                    </CardBody>
                  </Card>
                </NavLink>
              </Col>
              <Col lg="4">
                <NavLink href="/pastor">
                  <Card className="presbytry">
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
                        <h1>Pastor's name</h1>
                      </CardTitle>
                      <br /> <br />
                    </CardBody>
                  </Card>
                </NavLink>
              </Col>
              <Col lg="4">
                <NavLink href="/pastor">
                  <Card className="presbytry">
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
                        <h1>Pastor's name</h1>
                      </CardTitle>
                      <br /> <br />
                    </CardBody>
                  </Card>
                </NavLink>
              </Col>
              <Col lg="4">
                <NavLink href="/pastor">
                  <Card className="presbytry">
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
                        <h1>Pastor's name</h1>
                      </CardTitle>
                      <br /> <br />
                    </CardBody>
                  </Card>
                </NavLink>
              </Col>
              <Col lg="4">
                <NavLink href="/pastor">
                  <Card className="presbytry">
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
                        <h1>Pastor's name</h1>
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
