import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="row">
            <div className="social-icons col-lg-6 col-md-6 col-sm-12 col-xs-12 text-justify">
              <h2>connect with us</h2>
              <ul>
                <li>
                  <a href="http://">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="http://">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li>
                  <a href="http://">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="links col-lg-6 col-md-6 col-sm-12 col-xs-12 text-justify">
              <ul>
                <li>
                  <a className="page-link" href="/">
                    home
                  </a>
                </li>
                <li>
                  <a className="page-link" href="/about">
                    about
                  </a>
                </li>
                <li>
                  <a className="page-link" href="/ministries">
                    ministries
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="copy-rights col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
              <p>&copy; chrisco church:2019</p>
            </div>
            <div className="made-with col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
              Site by: chrisco web team
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
