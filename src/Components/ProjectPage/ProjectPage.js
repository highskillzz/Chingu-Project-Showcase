import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import * as Icons from "../Common/Icons/Icons";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import * as projectActions from "../../actions/showProject";
import { bindActionCreators } from "redux";
import Parser from 'html-react-parser';
import "./ProjectPage.css";
import {getContributorsArray,getOverviews,getDetails,getBrowserSupport} from "../Common/helpers";

class ProjectPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.props.getProjectList.getProject(this.props.location.param);
	}
	render() {
		let project = this.props.projectInfo;
		//if project is still loading, show this
		if (project===undefined) {
			console.log("undefined here");
			return <h1>Loading</h1>;
		}

		//for now using default installation	
		let installation= [
                {
                        "title": "Using npm",
                        "code": "npm start"
                },
                {
                        "title": "Using yarn",
                        "code": "yarn run"
                },
                {
                        "title": "On deployed version",
                        "code": "https://www.projectongithub.io"
                }
        ];

        //if project loaded, then get all data
        
		let BrowserSupportList = getBrowserSupport(project.browserSupport);
		let contributorsArray = getContributorsArray(project.contributors);
		let details=getDetails(project.build,"failing","gitter",contributorsArray.length);
		let overviews = getOverviews(project.version,"MIT","4","Github",contributorsArray);
		let keywordsList = project.keywords;
		let features = project.features;
		let resources = project.resources;
		let description = project.description;
		let title = project.name;

		//overview component is rendered
		const Overview = overviews.map((detail, index) => (
			<OverviewComponent
				key={index}
				name={detail.name}
				content={detail.content}
			/>
		));

		//renders out the details like build, contributors, chat and npm version.
		const DetailsRow = details.map((detail, index) => (
			<DetailComponent
				key={index}
				name={detail.name}
				content={detail.content}
			/>
		));

		//renders all the features of the project
		const featureList = features.map((feature, index) => (
			<li key={index}>{feature}</li>
		));

		return (
			<div className="project-page">
				<Grid container spacing={16}>
					<Grid item sm={12} className="grid">
						<Typography
							variant="display3"
							color="primary"
							gutterBottom
						>
							{title}
						</Typography>
					</Grid>
					<Grid item sm={12} className="grid">
						{DetailsRow}
					</Grid>
					<Grid item sm={12} className="grid">
						<div className="project-info">
							<p>{description}</p>
						</div>
						<hr />
					</Grid>

					<Grid item sm={12} md={6} className="grid">
						<Grid item sm={12} className="grid">
							<div className="feature-list">
								<h2>Features</h2>
								{featureList}
							</div>
							<hr />
						</Grid>
						<Grid item className="grid">
							<h2>Browser Support</h2>
							<BrowserSupport list={BrowserSupportList} />
						</Grid>
					</Grid>

					<Grid item md={1} className="grid">
						<div />
					</Grid>

					<Hidden smDown>
						<Grid item md={5} className="grid">
							<h2
								style={{
									textAlign: "center",
									marginRight: "9%",
									marginBottom: "6%"
								}}
							>
								Overview
							</h2>

							<Grid container spacing={16}>
								{Overview}
							</Grid>
						</Grid>
					</Hidden>

					<Grid item sm={12} className="grid">
						<hr />
						<h2>Installation</h2>
						<InstallationComponent list={installation} />
						<hr />
					</Grid>
					<Grid item sm={12} className="grid">
						<h2>Resources</h2>
						<ResourcesComponent list={resources} />
						<hr />
					</Grid>
					<Grid item sm={12} className="grid">
						<h2>Keywords</h2>
						<KeywordsComponent list={keywordsList} />
					</Grid>
				</Grid>
			</div>
		);
	}
}
// <InstallationComponent list={installation} />
//renders the Browser Support
class BrowserSupport extends Component {
	render() {
		const TableCellCheckRow = this.props.list.map(
			(browserSupport, index) => (
				<td key={index}>
					<Checkbox checked={browserSupport.support==="Yes"} />
				</td>
			)
		);
		const TableHeadRow = this.props.list.map(function(
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
		const Code = props =>
			props.code !== undefined ? (
				<div className="highlight sh">{props.code}</div>
			) : (
				<span />
			);
		const installList = this.props.list.map((steps, index) => (
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
		const resourcesList = this.props.list.map((resource, index) => (
			<ul key={index}>
				<li>
					<a href={resource.url}>{resource.title}</a>
				</li>
			</ul>
		));
		return <div className="resources">{resourcesList}</div>;
	}
}

//renders the keywords for the project
class KeywordsComponent extends Component {
	render() {
		const KeywordRow = this.props.list.map((keyword, index) => (
			<Button key={index} variant="outlined" className="keyword-btn">
				{keyword}
			</Button>
		));
		return <div className="keywords-list">{KeywordRow}</div>;
	}
}

class OverviewComponent extends Component {
	render() {
		return (
			<Grid item md={6} className="grid">
				<div className="">
					<h3>{this.props.name}</h3>
					<Divider
						style={{ width: "81%", backgroundColor: "black" }}
					/>
					<p>{this.props.content}</p>
				</div>
			</Grid>
		);
	}
}

const mapStateToProps = state => {
	return {
		projectInfo: state.projects.projectInfo
	};
};

const mapActionsToProps = dispatch => {
	return {
		getProjectList: bindActionCreators(projectActions, dispatch)
	};
};

export default connect(mapStateToProps, mapActionsToProps)(ProjectPage);
