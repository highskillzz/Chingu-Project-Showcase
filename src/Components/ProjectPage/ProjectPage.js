import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import "./ProjectPage.css";

const BrowserSupportList = [
	{
		browserName: "Chrome",
		support: "true"
	},
	{
		browserName: "Chrome",
		support: "true"
	},
	{
		browserName: "Chrome",
		support: "true"
	},
	{
		browserName: "Chrome",
		support: "true"
	},
	{
		browserName: "Chrome",
		support: "true"
	}
];

const details = [
	{
		name: "npm",
		content: "v18.0.0"
	},
	{
		name: "build",
		content: "failing"
	},
	{
		name: "chat",
		content: "gitter"
	},
	{
		name: "contributors",
		content: "4"
	}
];

const features = [
	{
		descripton: "Make XMLHttpRequests from the browser"
	},
	{
		descripton: "Make http requests from node.js"
	},
	{
		descripton: "Supports the Promise API"
	},
	{
		descripton: "Intercept request and response"
	},
	{
		descripton: "Transform request and response data"
	}
];

class ProjectPage extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		const DetailsRow = details.map(detail => (
			<DetailComponent name={detail.name} content={detail.content} />
		));

		const featureList = features.map(feature => (
			<li>{feature.descripton}</li>
		));

		return (
			<div className="project-page">
				<Grid container spacing={24}>
					<Grid item sm={12}>
						<h1>Sample Project</h1>
					</Grid>
					<Grid item sm={12}>
						{DetailsRow}
					</Grid>
					<Grid item sm={12}>
						<div className="project-info">
							<p>
								When an open source project starts, it is
								normally accompanied by a single person and only
								when that person does a lot of work and gets the
								project up and running, do other open source
								contributors come to
							</p>
						</div>
					</Grid>
					<Grid item sm={12}>
						<hr />
					</Grid>
					<Grid item sm={12}>
						<div className="feature-list">
							<h2>Features</h2>
							{featureList}
						</div>
					</Grid>
					<Grid item>
						<h2>Browser Support</h2>
						<BrowserSupport />
					</Grid>
					<Grid item sm={12}>
						<h2>Installation</h2>
						<InstallationComponent />
					</Grid>
					<Grid item sm={12}>
						<h2>Resources</h2>
						<ResourcesComponent />
					</Grid>
				</Grid>
			</div>
		);
	}
}

class BrowserSupport extends Component {
	render() {
		const TableCellCheckRow = BrowserSupportList.map(browserSupport => (
			<td>
				<Checkbox checked={browserSupport.support} />
			</td>
		));
		const TableHeadRow = BrowserSupportList.map(browserSupport => (
			<th>{browserSupport.browserName}</th>
		));
		return (
			<table>
				<thead>
					<tr>{TableHeadRow}</tr>
				</thead>
				<tbody>
					<tr>{TableCellCheckRow}</tr>
				</tbody>
			</table>
		);
	}
}

class DetailComponent extends Component {
	render() {
		return (
			<span className="detail">
				<span className="name box">{this.props.name}</span>
				<span className="content box">{this.props.content}</span>
			</span>
		);
	}
}

class InstallationComponent extends Component {
	render() {
		return (
			<div className="install">
				<p>Using npm</p>
				<div className="highlight sh">npm install axios</div>
				<p>Using npm</p>
				<div className="highlight sh">npm install axios</div>
				<p>Using npm</p>
				<div className="highlight sh">npm install axios</div>
			</div>
		);
	}
}

const resources=[
	{
		title:"How to Contribute",
		link:""
	},
	{
		title:"Stacks Used",
		link:""
	}
];
class ResourcesComponent extends Component {
	render() {
		const resourcesList = resources.map(resource => (
			<ul>
				<li><a href="#">{resource.title}</a></li>
			</ul>
		));
		return <div className="resources">{resourcesList}</div>;
	}
}

export default ProjectPage;
