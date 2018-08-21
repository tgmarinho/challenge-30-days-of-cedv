import React from "react";
import PropTypes from "prop-types";
import { withStyles, AppBar, Tabs, Tab, Typography } from "@material-ui/core";
import {
    LooksOne,
    LooksTwo,
    Looks3,
    Looks4,
    ThumbDown,
    ThumbUp,
    ThumbsUpDown
} from "@material-ui/icons";

import WeekComponent from "./ui/WeekComponent";
import FoodList from "./ui/FoodList";

import { weekOne, weekTwo, weekThree, weekFour } from "./data/weeks";
import { acelera, retarda, modera } from "./data/descriptions";

import { ACELERADORES } from "./mightyFood/mightyFoodAceleradores";
import { MODERADORES } from "./mightyFood/mightyFoodModeradores";
import { RETARDADORES } from "./mightyFood/mightyFoodRetardadores";

import logo from './logo.svg';
import './App.css';

const TabContainer = props => {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
};

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: theme.palette.background.paper
    }
});

class ScrollableTabsButtonForce extends React.Component {
    state = {
        value: 0
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
                        <Tab icon={<img src={logo} className="App-logo" alt="logo" />} />
                        <Tab label="Aceleradores" icon={<ThumbUp />} />
                        <Tab label="Moderadores" icon={<ThumbsUpDown />} />
                        <Tab label="Retardadores" icon={<ThumbDown />} />
                        <Tab label="Semana" icon={<LooksOne />} />
                        <Tab label="Semana" icon={<LooksTwo />} />
                        <Tab label="Semana" icon={<Looks3 />} />
                        <Tab label="Semana" icon={<Looks4 />} />
                    </Tabs>
                </AppBar>
                {value === 0 && (
                    <TabContainer>
                        {
                            <div className="App">
                                <header className="App-header">
                                    <img src={logo} className="App-logo" alt="logo" />
                                    <h1 className="App-title">Bem vindos ao Desafio 30 Dias - Reagindo na Alimentação</h1>
                                </header>
                                <p className="App-intro">Acelerando o emagrecimento e o bem estar!</p>
                            </div>
                        }
                    </TabContainer>
                )},
        {value === 1 && (
                    <TabContainer>
                        {
                            <FoodList
                                food={ACELERADORES}
                                backgroundColor={{ backgroundColor: "#00E676" }}
                                typeDescription={acelera}
                            />
                        }
                    </TabContainer>
                )}
                {value === 2 && (
                    <TabContainer>
                        {
                            <FoodList
                                food={MODERADORES}
                                backgroundColor={{ backgroundColor: "#FFEE58" }}
                                typeDescription={modera}
                            />
                        }
                    </TabContainer>
                )}
                {value === 3 && (
                    <TabContainer>
                        {
                            <FoodList
                                food={RETARDADORES}
                                backgroundColor={{ backgroundColor: "#FF7043" }}
                                fontColor={{ color: "white" }}
                                typeDescription={retarda}
                            />
                        }{" "}
                    </TabContainer>
                )}
                {value === 4 && (
                    <TabContainer>{<WeekComponent rows={weekOne} />}</TabContainer>
                )}
                {value === 5 && (
                    <TabContainer>{<WeekComponent rows={weekTwo} />}</TabContainer>
                )}
                {value === 6 && (
                    <TabContainer>{<WeekComponent rows={weekThree} />}</TabContainer>
                )}
                {value === 7 && (
                    <TabContainer>{<WeekComponent rows={weekFour} />}</TabContainer>
                )}
            </div>
        );
    }
}

ScrollableTabsButtonForce.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScrollableTabsButtonForce);
