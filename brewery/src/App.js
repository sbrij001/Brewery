import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import IndexContainer from "./components/IndexContainer"
import BoardContainer from "./components/BoardContainer"
import BrewCard from "./components/BrewCards"
import Board from "./components/Board"

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


// Trying to figure out how to make a board have things in them not a seperate board for each.
// {  console.log(boardName)
//   let boardCard = (<BrewCard key={beerObj.id} beerObj={beerObj} boardName={boardName}/>);
//   let currentBoards = []
//   // if(this.state.userBoards.boardName){
//   //   currentBoards = [...this.state.userBoards.boardName]
//   // }else {
//   //   this.state.userBoards.boardName = [];
//   //   currentBoards = this.state.userBoards.boardName;
//   // }
//
//   let boards = (<Board name={boardName} userBrew={[...currentBoards, boardCard]}/>)
//   this.setState({
//     userBoards: {
//       boardName: [
//       (boards)]
//     }
//   })
// }

  beerMover = (beerObj, boardName) => {
    console.log(boardName)
    let boardCard = (<BrewCard key={beerObj.id} beerObj={beerObj} boardName={boardName}/>);
    let boards = (<Board name={boardName} userBrew={boardCard}/>)
    this.setState({
      userBoards: [...this.state.userBoards,
        (boards)]
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
