import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardImg,
  Jumbotron,
  CardText,
  Row,
  Col,
  Container
} from "reactstrap";

export default class Women extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="ministry">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardImg
                    top
                    height="50%"
                    width="50%"
                    src="/img/bg.jpg"
                    alt="Card image cap"
                  />
                </Card>
              </Col>
              <Col sm="6">
                <Jumbotron>
                  <Container>
                    <h1 className="text-center">Women' Ministry</h1>
                  </Container>
                </Jumbotron>
                <Card body className="ministry-description">
                  <CardTitle>Women' Ministry</CardTitle>
                  <CardText>
                    Women's Ministry includes all women in the ministry. Various
                    activities and events occur so as to make everyone part of
                    the family. This is one of the ministries that enables
                    everyone to have a place to call home in the Chrisco family
                  </CardText>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
