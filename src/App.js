import React, { Component, Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.scss";

import ScrollableTabsButtonForce from './Tab'


const drawerWidth = 240;


class App extends Component {
  render() {
  
    return (

      <Fragment>
        <CssBaseline />
        <ScrollableTabsButtonForce />
      </Fragment>

    );
  }
}

export default App;
