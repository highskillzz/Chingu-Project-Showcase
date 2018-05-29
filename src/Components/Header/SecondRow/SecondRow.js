//Renders the second row in header, containing the search box and search button.

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "./SecondRow.css";

//Style for material-ui component
const styles = {
	root: {
		flexGrow: 1
	}
};
//Function that renders the required component
function SecondRow(props) {
	const { classes } = props;
	return (
		<div className="SecondRow">
			<div className={classes.root}>
				<Toolbar>
					<Typography
						variant="title"
						color="inherit"
						className="searchbox-div"
					>
						<Grid container spacing={24}>
							<Grid item sm={10} xs={12}>
								<input className="searchbox" />
							</Grid>
							<Grid item sm={2} xs={12}>
								<Button
									variant="raised"
									color="primary"
									className="searchbtn"
									style={{ height: "20px" }}
								>
									Search
								</Button>
							</Grid>
						</Grid>
					</Typography>
				</Toolbar>
			</div>
		</div>
	);
}

SecondRow.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SecondRow);
