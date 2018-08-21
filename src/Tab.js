import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { Event } from '@material-ui/icons';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbsUpDown from '@material-ui/icons/ThumbsUpDown';

import Typography from '@material-ui/core/Typography';

import FoodList from './ui/FoodList'

import { ACELERADORES } from './mightyFood/mightyFoodAceleradores';
import { MODERADORES } from './mightyFood/mightyFoodModeradores';
import { RETARDADORES } from "./mightyFood/mightyFoodRetardadores";

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

class ScrollableTabsButtonForce extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        scrollable
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab label="Aceleradores" icon={<ThumbUp />} />
                        <Tab label="Moderadores" icon={<ThumbsUpDown />} />
                        <Tab label="Retardadores" icon={<ThumbDown />} />
                        <Tab label="Semana 1" icon={<Event />} />

                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>{<FoodList food={ACELERADORES} backgroundColor={{ backgroundColor: "#00E676" }} />}</TabContainer>}
                {value === 1 && <TabContainer>{<FoodList food={MODERADORES} backgroundColor={{ backgroundColor: "#FFEE58"}} />}</TabContainer>}
                {value === 2 && <TabContainer>{<FoodList food={RETARDADORES} backgroundColor={{ backgroundColor: "#FF7043"}} />} </TabContainer>}
                {value === 3 && <TabContainer>Semana 1</TabContainer>}

            </div>
        );
    }
}

ScrollableTabsButtonForce.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonForce);
