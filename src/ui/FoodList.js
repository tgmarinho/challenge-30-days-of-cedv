import React, { Fragment } from "react";
import FoodName from "./FoodName";
// import { ListItem, ListItemText, Checkbox, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

const styles = theme => ({
    root: {
        width: "100%",
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: "relative",
        overflow: "auto",
        // maxHeight: 300
    },
    listSection: {
        backgroundColor: "inherit"
    },
    ul: {
        backgroundColor: "inherit",
        padding: 0
    }
});

const FoodList = (props) => {
    const { classes, food } = props
    console.log(food);

    // for (let i in  food ) {
    //     console.log(items[i].category);
    //   }

    return (
        <List className={classes.root} subheader={<li />}>
          {food.map((item, index) => (
            <li key={`section-${index}`} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListSubheader>{item.category}</ListSubheader>
                {item.items.map((item,index) => (
                  <ListItem key={`item-${item}-${index}`}>
                    <ListItemText primary={item.name} />
                  </ListItem>
                ))}
              </ul>
            </li>
          ))}
        </List>
      );

    // return food.map((item, index) => (

    //     <div key={index} >
    //         <Paper className="food-acelerator">
    //             <ListItem>
    //                 <ListItemText primary={item.category} />
    //                 <FoodName names={item.items} />
    //             </ListItem>
    //         </Paper>
    //     </div>

    // ));
};

export default withStyles(styles)(FoodList);
