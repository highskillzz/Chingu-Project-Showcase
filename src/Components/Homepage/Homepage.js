// Renders the main content of the page
import React, { Component } from "react";
import OptionsRow from "./OptionsRow/OptionsRow";
import MainContent from "../MainContent/MainContent";
import "./Homepage.css";
import SecondRow from "../Header/SecondRow/SecondRow";

class Homepage extends Component {
  render() {
    return (
      <div>
        <SecondRow />
        <div className="Homepage">
          <OptionsRow />
          <div className="main-content">
            <MainContent />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
