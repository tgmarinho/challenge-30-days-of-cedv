import React, { Component, Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";

import ScrollableTabsButtonForce from "./Tab";

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
