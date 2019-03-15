import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IndexContainer from "./components/IndexContainer"
import BoardContainer from "./components/BoardContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
      <IndexContainer/>
      <BoardContainer/>
      </div>
    );
  }
}

export default App;
