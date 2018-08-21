import React, { Fragment } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from "@material-ui/core/styles";

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
  },

});

const FoodList = props => {
  const { classes, food, backgroundColor } = props;
 

  return (
    <Fragment>
      {food.map((item, index) => (
        <ExpansionPanel key={index}>
          <ExpansionPanelSummary style={backgroundColor} expandIcon={<ExpandMoreIcon />}>
            <Typography variant="title" className={classes.heading}>
              {item.category}
            </Typography>
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
