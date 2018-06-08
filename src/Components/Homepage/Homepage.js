// Renders the main content of the page
import React, { Component } from "react";
import OptionsRow from "./OptionsRow/OptionsRow";
import MainContent from "../MainContent/MainContent";
import "./Homepage.css";

class Homepage extends Component {
	render() {
		return (
			<div className="Homepage">
				<OptionsRow />
				<div className="main-content">
					<MainContent />
				</div>
			</div>
		);
	}
}

export default Homepage;
