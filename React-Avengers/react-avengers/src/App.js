import React, { Component } from 'react';
import './App.css';
import avengers from './avengersData';
import Avengers from './Avengers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: avengers
    }
  }


  render() {
    return (
      <div className="App">

        <header className="App-header">         
          <h1 className="App-title">Avengers React App</h1>
        </header>

        <div>
          <Avengers avengersData = {this.state.avengers} />
        </div>

      </div>
    );
  }
}

export default App;
