/**
 * This component have two columns.
 * First column just show company logo
 *
 * Middle column (.footer_links) contain all kind of links seperated into another 4 columns. When hit 950px those 4 columns
 * start to wrap to suit mobile view.
 **/

import { Link } from "react-router-dom";
import React, { Component } from "react";

import "./Footer.css";
import logo from "../Common/Images/logo.png";

/**
 * <div className="footer-overlay"> - Just to give full width white bar.
 **/
class Footer extends Component {
  render() {
    return (
      <div className="footer-overlay">
        <div className="footer">
          <div className="footer__logo1">
            <Link to="/" className="router-link-reset">
              <img src={logo} alt="Project Showcase" />
            </Link>
          </div>
          <div className="footer__links">
            <div className="footer__links__column">
              <div>CONNECT</div>
              <ul>
                <li>Help</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div className="footer__links__column">
              <div>GENERAL</div>
              <ul>
                <li>About</li>
                <li>Medium</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="footer__links__column">
              <div>SPECIALTY PAGES</div>
              <ul>
                <li>Most Viewed</li>
                <li>High Rated</li>
                <li>Recommended Projects</li>
                <li>New Additions</li>
              </ul>
            </div>
            <div className="footer__links__column">
              <div>ACCOUNTS</div>
              <ul>
                <li>My Account</li>
                <li>Community</li>
                <li>Github</li>
                <li>chingu.io</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
