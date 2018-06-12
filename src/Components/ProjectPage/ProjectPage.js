import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import * as Icons from "../Common/Icons/Icons";
import "./ProjectPage.css";

const BrowserSupportList = [
	{
		browserName: "Chrome",
		support: "true"
	},
	{
		browserName: "Firefox",
		support: "true"
	},
	{
		browserName: "InternetExplorer",
		support: "true"
	},
	{
		browserName: "Opera",
		support: "true"
	},
	{
		browserName: "Edge",
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

const resources = [
	{
		title: "How to Contribute",
		link: ""
	},
	{
		title: "Stacks Used",
		link: ""
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
					<Grid item sm={12}>
						<h2>Keywords</h2>
						<KeywordsComponent />
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
		const TableHeadRow = BrowserSupportList.map(function(
			browserSupport,
			index
		) {
			const browserName = browserSupport.browserName;
			const IconName = Icons[browserName];
			return (
				<th>
					<IconName />
				</th>
			);
		});
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

const installation = [
	{
		title: "Using npm",
		code: "npm install axios"
	},
	{
		title: "Using npm",
		code: "npm install axios"
	},
	{
		title: "Using npm",
		code: "npm install axios"
	},
	{
		title: "Using npm",
		code: "npm install axios"
	}
];

class InstallationComponent extends Component {
	render() {
		const installList = installation.map(steps => (
			<div className="install-step">
				<p>Using npm</p>
				<div className="highlight sh">npm install axios</div>
			</div>
		));
		return <div className="install">{installList}</div>;
	}
}

class ResourcesComponent extends Component {
	render() {
		const resourcesList = resources.map(resource => (
			<ul>
				<li>
					<a href="#">{resource.title}</a>
				</li>
			</ul>
		));
		return <div className="resources">{resourcesList}</div>;
	}
}

const keywordsList = ["XML", "HTTP", "NodeJs"];

class KeywordsComponent extends Component {
	render() {
		const KeywordRow = keywordsList.map(keyword => (
			<Button variant="outlined" className="keyword-btn">
				{keyword}
			</Button>
		));
		return <div className="keywords-list">{KeywordRow}</div>;
	}
}

export default ProjectPage;
