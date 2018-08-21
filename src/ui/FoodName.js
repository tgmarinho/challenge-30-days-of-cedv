import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";


const FoodName = ({ names }) => {
    return names.map((item, index) => (

        <div key={index} >
            <ListSubheader>
                
                        <ListItemText primary={item.name} />
                   
              
            </ListSubheader>
        </div>
    ));
};

export default FoodName;
