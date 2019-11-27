import React, { Component } from "react";

export default class Description extends Component {
  render() {
    return (
      <div>
        <section id="wrapper" className="skewed">
          <div className="description top">
            <div className="content-wrap">
              <div className="content-body">
                <h1>Chrisco Central Church</h1>
                <p>
                  All are welcomed to the house of the lord. where two or more
                  are gathered be sure that the Lord is there with us.
                  <br /> We are a family of believers and all are one in the
                  eyes of our Lord Jesus Christ.
                  <br /> We are all made in his own Image and likeness. Do not
                  be afraid for our sins have been forgiven
                </p>
              </div>
              <img src="/churchwebsite/church3.jpg" alt=""></img>
            </div>
          </div>
          <div className="description bottom">
            <div className="content-wrap">
              <div className="content-body">
                <h1>Founders</h1>
                <br />
                <h2>Apostle Harry Das and Mama Das</h2>
              </div>
              <img src="/churchwebsite/Harry Das and Mama Das.jpg" alt=""></img>
            </div>
          </div>
          <div className="handle"></div>
        </section>
      </div>
    );
  }
}
