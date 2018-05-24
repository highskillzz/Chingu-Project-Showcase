import React, { Component } from "react";
import Badge from "@material-ui/core/Badge";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import "./OptionsRow.css";

class OptionsRow extends Component {
	render() {
		return (
			<div className="OptionsRow">
				<AppBar position="static" color="default">
					<Tabs value={0}>
						<Tab label={<Badge>Item One</Badge>} />
						<Tab label="Item Two" />
						<Tab label="Item Three" />
					</Tabs>
				</AppBar>
			</div>
		);
	}
}

export default OptionsRow;
