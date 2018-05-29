// Renders the top row in header containing the app bar with site title/logo and page title

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const SITE_TITLE="Chingu Project Showcase";
const PAGE_TITLE="Chingu Voyage 5";

//Styles for material-ui component
const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
};

//This is the function that renders our required componenet
function TopRow(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                {SITE_TITLE}
              </Typography>
              <Button color="inherit">{PAGE_TITLE}</Button>
            </Toolbar>
          </AppBar>
    </div>
  );
}

TopRow.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopRow);
