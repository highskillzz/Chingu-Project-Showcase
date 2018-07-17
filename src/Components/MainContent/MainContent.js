import React, { Component } from "react";
import Card from "./Card/Card";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import * as projectActions from "../../actions/showProject";
import { bindActionCreators } from "redux";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class MainContent extends Component {
  componentDidMount() {
    console.log("Mounting");
    this.props.getProjectList.getAllProjects();
  }
  render() {
  	const value=this.props.value;
    const { classes } = this.props;
    let allProjectList = this.props.projectList;
    let projectList=undefined;
    if (allProjectList === undefined) {
      return <h1>Loading</h1>;
    }
    if(value=="All"){
    	projectList=allProjectList;
    }
    else{
    	projectList = allProjectList.filter(project=>{
    		return project.category==value;
    	});
	}
    console.log(projectList);
    let projects = projectList.map((project, index) => {
      let contributorsArray = [];
      for (var i = 0; i < project.contributors.length; i++) {
        contributorsArray.push(project.contributors[i].username);
      }
      return (
        <Grid item xs={12} sm={4} key={index}>
          <Card
            title={project.name}
            contributors={contributorsArray}
            description={project.description}
            image={project.image}
            id={project.id}
          />
        </Grid>
      );
    });
    return (
      <div className={classes.root}>
        <Grid container alignItems="baseline" spacing={40}>
          {projects}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projectList: state.projects.projectList
  };
};
const mapActionsToProps = dispatch => {
  return {
    getProjectList: bindActionCreators(projectActions, dispatch)
  };
};
export default connect(mapStateToProps, mapActionsToProps)(
  withStyles(styles)(MainContent)
);
