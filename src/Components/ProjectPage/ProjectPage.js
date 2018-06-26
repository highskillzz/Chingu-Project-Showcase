import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import * as Icons from "../Common/Icons/Icons";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-apollo"; // NOTE: different connect!
import gql from "graphql-tag"; // NOTE: lets us define GraphQL queries in a template language

import "./ProjectPage.css";

class ProjectPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    // Renders the overview of the project
    // console.log(this.props.projectInfo);
    const project = this.props.data.project;
    const keywordsList = this.props.projectInfo.keywordsList;
    const BrowserSupportList = this.props.projectInfo.BrowserSupportList;
    const details = this.props.projectInfo.details;
    const features = this.props.projectInfo.features;
    const resources = this.props.projectInfo.resources;
    const installation = this.props.projectInfo.installation;
    const overviews = this.props.projectInfo.overviews;
    const description = this.props.projectInfo.description;
    const title = this.props.projectInfo.title;

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
      <li key={index}>{feature.descripton}</li>
    ));

    return (
      <div className="project-page">
        <Grid container spacing={16}>
          <Grid item sm={12} className="grid">
            <Typography variant="display3" color="primary" gutterBottom>
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

//renders the Browser Support
class BrowserSupport extends Component {
  render() {
    const TableCellCheckRow = this.props.list.map((browserSupport, index) => (
      <td key={index}>
        <Checkbox checked={browserSupport.support} />
      </td>
    ));
    const TableHeadRow = this.props.list.map(function(browserSupport, index) {
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
          <Divider style={{ width: "81%", backgroundColor: "black" }} />
          <p>{this.props.content}</p>
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    projectInfo: state.project.projectInfo
  };
};

const mapQueriesToProps = ({ ownProps, state }) => {
  return {
    data: {
      query: gql`
        query {
          project(id: "41224d776a326fb40f000001") {
            id
            name
            description
            image
            contributors {
              name
            }
            resources {
              title
              url
            }
          }
        }
      `
    }
  };
};

export default connect({
  mapQueriesToProps
})(ProjectPage);
// const mapActionsToProps = dispatch => {
//   return {
//     myApplet: bindActionCreators(myAppletActions, dispatch)
//   };
// };
// export default connect(mapStateToProps)(ProjectPage);
