import React from "react";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";

const Example = props => {
  return (
    <div className="information container">
      <Row>
        <Col sm="6">
          <h1 className="text-center">sunday program</h1>
          <Card body>
            <CardTitle>6:30am</CardTitle>
            <CardText>MORNING GLORY</CardText>
            <hr />
            <CardTitle>8:00am</CardTitle>
            <CardText>
              YOUTH SERVICE PRAISE AND WORSHIP PRACTICE COMMITMENT CLASS NEW
              CONVERTS CLASS
            </CardText>
            <hr />
            <CardTitle>9:00am</CardTitle>
            <CardText>BIBLE HOUR SUNDAY SCHOOL</CardText>
            <hr />
            <CardTitle>10:30am</CardTitle>
            <CardText>MAIN SERVICE YOUTH CELL GROUPS</CardText>
          </Card>
        </Col>
        <Col sm="6">
          <h1 className="text-center">other meetings</h1>
          <Card body>
            <CardTitle className="other-meetings">bible study</CardTitle>
            <CardText className="other-meetings">
              WEDNESDAY: 5:30 - 7:30pm
            </CardText>
            <CardTitle className="other-meetings">
              overnight prayers(keshas)
            </CardTitle>
            <CardText className="other-meetings">
              LAST FRIDAY OF THE MONTH 9:00pm - 6:00am
            </CardText>
            <CardTitle className="other-meetings">morning prayer</CardTitle>
            <CardText className="other-meetings">DAILY: 6:00 - 7:00am</CardText>
            <CardTitle className="other-meetings">
              mens and ladies fellowship
            </CardTitle>
            <CardText className="other-meetings">
              EVERY THIRD SUNDAY: 2:00pm
            </CardText>
            <CardTitle className="other-meetings">
              elders monthly meeting
            </CardTitle>
            <CardText className="other-meetings">2nd SUNDAY</CardText>
            <CardTitle className="other-meetings">
              deacons' monthly meeting
            </CardTitle>
            <CardText className="other-meetings">1st SUNDAY</CardText>
            <CardTitle className="other-meetings">deaconess meeting</CardTitle>
            <CardText className="other-meetings">2nd SATURDAY</CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Example;
