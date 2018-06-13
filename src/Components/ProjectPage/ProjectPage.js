import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import * as Icons from "../Common/Icons/Icons";
import {keywordsList,BrowserSupportList,details,features,resources,installation} from "../../models/staticModel";
import "./ProjectPage.css";

class ProjectPage extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		//renders out the details like build, contributors, chat and npm version.
		const DetailsRow = details.map((detail,index) => (
			<DetailComponent key={index} name={detail.name} content={detail.content} />
		));

		//renders all the features of the project
		const featureList = features.map((feature,index) => (
			<li key={index}>{feature.descripton}</li>
		));

		return (
			<div className="project-page">
				<Grid container spacing={24}>
					<Grid item sm={12} className="grid">
						<h1>Sample Project</h1>
					</Grid>
					<Grid item sm={12} className="grid">
						{DetailsRow}
					</Grid>
					<Grid item sm={12} className="grid">
						<div className="project-info">
							<p>
								When an open source project starts, it is
								normally accompanied by a single person and only
								when that person does a lot of work and gets the
								project up and running, do other open source
								contributors come to
							</p>
						</div>
						<hr />
					</Grid>
					<Grid item sm={12} className="grid">
						<div className="feature-list">
							<h2>Features</h2>
							{featureList}
						</div>
						<hr />
					</Grid>
					<Grid item className="grid">
						<h2>Browser Support</h2>
						<BrowserSupport />
					</Grid>
					<Grid item sm={12} className="grid">
					<hr />
						<h2>Installation</h2>
						<InstallationComponent />
						<hr />
					</Grid>
					<Grid item sm={12} className="grid">
						<h2>Resources</h2>
						<ResourcesComponent />
						<hr />
					</Grid>
					<Grid item sm={12} className="grid">
						<h2>Keywords</h2>
						<KeywordsComponent />
					</Grid>
				</Grid>
			</div>
		);
	}
}

//renders the Browser Support
class BrowserSupport extends Component {
	render() {
		const TableCellCheckRow = BrowserSupportList.map((browserSupport,index) => (
			<td key={index}>
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
				<th key={index}>
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

//renders the details component
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

//renders the steps required for installation
class InstallationComponent extends Component {
	render() {
		const Code=props=>(
			props.code!==undefined?(
				<div className="highlight sh">{props.code}</div>
			):(
				<span />
			)
		);
		const installList = installation.map((steps,index) => (
			<div className="install-step" key={index}>
				<li>{steps.title}</li>
				<Code code={steps.code} />
			</div>
		));
		return <div className="install">{installList}</div>;
	}
}

//renders the resources for the project
class ResourcesComponent extends Component {
	render() {
		const resourcesList = resources.map((resource,index) => (
			<ul key={index}>
				<li>
					<a href={resource.link}>{resource.title}</a>
				</li>
			</ul>
		));
		return <div className="resources">{resourcesList}</div>;
	}
}

//renders the keywords for the project 
class KeywordsComponent extends Component {
	render() {
		const KeywordRow = keywordsList.map((keyword,index) => (
			<Button key={index} variant="outlined" className="keyword-btn">
				{keyword}
			</Button>
		));
		return <div className="keywords-list">{KeywordRow}</div>;
	}
}

export default ProjectPage;
