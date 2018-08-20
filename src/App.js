import React, { Component, Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from "./logo.svg";
import "./App.scss";
// import { ACELERADORES } from './mightyFood/mightyFoodAceleradores';
// import { MODERADORES } from './mightyFood/mightyFoodModeradores';
import { RETARDADORES } from "./mightyFood/mightyFoodRetardadores";
import { withStyles } from '@material-ui/core/styles';
import { MenuContainer } from './menu/MenuContainer';
import { ToolbarComponent } from './menu/toolbar/ToolbarComponent';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class App extends Component {
  render() {
    for (let i in RETARDADORES) {
      console.log(RETARDADORES[i].category);
    }

    return (
      <div className="root">
        <Fragment>
          <CssBaseline />
          <ToolbarComponent />
          <MenuContainer />
        </Fragment>
        {<div className="content" >
          <div className="toolbar" >
            {/* <Routes /> */}
            {RETARDADORES.CARNES_E_PEIXES.items.map((item, index) => (
              <p key={index} >
                {item.name}
              </p>
            ))}
          </div>
        </div>}



      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
