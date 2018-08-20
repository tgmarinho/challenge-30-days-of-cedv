import React, { Component, Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from "./logo.svg";
import "./App.scss";
// import { ACELERADORES } from './mightyFood/mightyFoodAceleradores';
// import { MODERADORES } from './mightyFood/mightyFoodModeradores';
import { RETARDADORES } from "./mightyFood/mightyFoodRetardadores";
import { Routes } from './routes/Routes';


const drawerWidth = 240;

const items = () => (
  <div className="content" >
    <div className="toolbar" >
      <Routes />
      {RETARDADORES.CARNES_E_PEIXES.items.map((item, index) => (
        <p key={index} >
          {item.name}
        </p>
      ))}
    </div>
  </div>
);

class App extends Component {
  render() {
    for (let i in RETARDADORES) {
      console.log(RETARDADORES[i].category);
    }

    return (

      <Fragment>
        <CssBaseline />
        
        <Routes>
         

        </Routes>
      </Fragment>





    );
  }
}

export default App;
