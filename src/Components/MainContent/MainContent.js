import React, { Component } from 'react';
import Card from './Card/Card';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";

const styles = theme => ({
    root: {
      flexGrow: 1,
    }
});

function MainContent(props) {
        const { classes } = props;
        const allProjects=props.allProjects;
        const projectList=allProjects.map((project,index)=>
          <Grid item xs={12} sm={4} key={index}>
              <Card title={project.name} contributors={project.contributors} description={project.description} image={project.image}/>
          </Grid>
        );
        return (
            <div className={classes.root}>
            <Grid container alignItems="baseline" spacing={40}>
              {projectList}
            </Grid>
          </div>
        );
    }

const mapStateToProps = state => {
  return {
    allProjects: state.project.allProjects
  };
};

export default connect(mapStateToProps)(withStyles(styles)(MainContent));
