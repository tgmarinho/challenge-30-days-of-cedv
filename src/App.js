import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { ACELERADORES } from './mightyFood/mightyFoodAceleradores';
// import { MODERADORES } from './mightyFood/mightyFoodModeradores';
import { RETARDADORES } from './mightyFood/mightyFoodRetardadores';







class App extends Component {
  render() {

    for ( let i in RETARDADORES) {
      console.log(RETARDADORES[i].category)
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>





        {

  RETARDADORES.CARNES_E_PEIXES.items.map((item, index) => (
            <p key={index} className="App-intro">
              {item.name}
            </p>
          ))

        }




      </div>
    );
  }
}

export default App;
