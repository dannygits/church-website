import React from "react";
import { Card, CardText, Row, Col } from "reactstrap";

const Example = props => {
  return (
    <div className="contact">
      <h1 className="location text-center">find us</h1>
      <Row>
        <Col sm="6">
          <Card body>
            <CardText>
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7814792256418!2d36.774863814449695!3d-1.3062508360159621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a7964fedf6f%3A0xc8b77a1050ba5671!2sChrisco%20Central%20Church!5e0!3m2!1sen!2ske!4v1573734420998!5m2!1sen!2ske"
                className="map"
                frameborder="0"
                allowfullscreen=""
              ></iframe>
            </CardText>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardText>
              Chrisco Central Church P.O. BOX 10258-00100, NAIROBI
            </CardText>
            <hr />
            <CardText>
              Phone 1: 0726250961 <br /> Phone 2: +254 -(0) 20-2359996
            </CardText>
            <hr />
            <CardText>
              Email:
              <br /> chrisco.central@yahoo.com
            </CardText>
            <hr />
            <CardText>
              LOCATION:
              <br /> Nairobi-Woodley
            </CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Example;
