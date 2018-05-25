import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./OptionsRow.css";

const lists = [
	"All",
	"Web Development",
	"Android Development",
	"Graphic Design",
	"Machine Learning"
];

class OptionsRow extends Component {
	constructor(props) {
		super(props);
		this.state = { value: 0 };
		this.onClickTab = this.onClickTab.bind(this);
	}
	onClickTab(event,value) {
		this.setState({ value });
	}

	render() {
		const { value } = this.state;
		const listCategories = lists.map(name => (
			<Tab label={name}/>
		));
		console.log({value});
		return (
			<div className="OptionsRow">
				<AppBar position="static" color="default">
					<Tabs value={value} onChange={this.onClickTab}>{listCategories}</Tabs>
				</AppBar>
			</div>
		);
	}
}

export default OptionsRow;
