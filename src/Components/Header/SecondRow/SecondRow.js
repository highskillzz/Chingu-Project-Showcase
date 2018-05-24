import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./SecondRow.css";

const styles = {
	root: {
		flexGrow: 1
	}
};

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
						<input className="searchbox" />
						<Button
							variant="raised"
							color="primary"
							className="searchbtn"
							style={{ height: "20px" }}
						>
							Search
						</Button>
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
