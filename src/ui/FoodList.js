import React, { Fragment } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  withStyles
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto"
  },
  listagem: {
    width: "100%",
    position: "relative",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper
  }
});

const FoodList = props => {
  const { classes, food, backgroundColor, fontColor, typeDescription } = props;

  return (
    <Fragment>
      <br />
      <Typography variant="title" align="center" gutterBottom>
        {typeDescription}
      </Typography>
      <br />
      {food.map((item, index) => (
        <ExpansionPanel key={index}>
          <ExpansionPanelSummary
            style={backgroundColor}
            expandIcon={<ExpandMoreIcon />}
          >
            <div className="category-food">
              <img src={item.icon} className="Svg-icon" alt="IconFood" />
              <Typography
                className="Svg-text"
                component="h5"
                variant="title"
                style={fontColor}
              >
                {" "}
                {item.category}{" "}
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List component="nav" className={classes.listagem}>
              {item.items.map((item, index) => (
                <ListItem button>
                  <Typography variant="subheading">
                    <ListItemText primary={item.name} />
                  </Typography>
                </ListItem>
              ))}
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </Fragment>
  );
};

export default withStyles(styles)(FoodList);
