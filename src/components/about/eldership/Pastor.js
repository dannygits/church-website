import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col,
  Jumbotron,
  Container
} from "reactstrap";

export default class Pastor extends Component {
  render() {
    return (
      <div className="eldership">
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
                <h1 className="text-center">Pastor's name</h1>
              </Container>
            </Jumbotron>
            <Card body className="pastor-description">
              <CardTitle>Pastor's title</CardTitle>
              <CardText>Pastor's description</CardText>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
