// Renders the main content of the page
import React, { Component } from "react";
import OptionsRow from "./OptionsRow/OptionsRow";
import MainContent from "../MainContent/MainContent";
import "./Homepage.css";
import SecondRow from "../Header/SecondRow/SecondRow";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:"All"
    };
    this.changeTab=this.changeTab.bind(this);
  }
  changeTab(value){
    this.setState({
      value:value
    });
  }
  render() {
    
    return (
      <div>
        <SecondRow />
        <div className="Homepage">
          <OptionsRow changeTab={this.changeTab}/>
          <div className="main-content">
            <MainContent key={this.state.value} value={this.state.value}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
