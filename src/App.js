import React, { Component, Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ScrollableTabsButtonForce from "./Tab";
import "./App.css";

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
