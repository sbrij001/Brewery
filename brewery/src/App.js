import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import IndexContainer from "./components/IndexContainer"
import BoardContainer from "./components/BoardContainer"
import BrewCard from "./components/BrewCards"

class App extends Component {

  state = {
    boards: [],
    userBoards: []
  }

  onSubmit = (board) => {
    this.setState({
      boards: [...this.state.boards, board]
    })
  }
  beerMover = (beerObj) => {
    console.log(beerObj)
    this.setState({
      userBoards: [...this.state.userBoards, (<BrewCard key={beerObj.id} beerObj={beerObj}/>)]
    })
  }

  render() {
    return (
      <div className="App">
      <IndexContainer boards={this.state.boards} beerMover={this.beerMover}/>
      <BoardContainer onSubmit={this.onSubmit} userBoards={this.state.userBoards}/>

      </div>
    );
  }
}

export default App;
