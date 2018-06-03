import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: "100%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
};

function CustomCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardHeader style={{paddingBottom:"0"}}
            title={props.title}
            subheader={props.contributors.join(", ")}
          />
        <CardContent style={{paddingTop:"5px"}}>
          <Typography gutterBottom variant="title" component="h2">
            
          </Typography>
          <Typography variant="body2">
          {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          
          <Button size="small" variant="raised" color="primary">
            Learn More
          </Button>
          <Button size="small" variant="outlined" color="secondary">
            View on Github
          </Button>
          {/*
          // <Button size="small" color="secondary">
          //   Share
          // </Button>
          */}
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(CustomCard);
