import React, { Component } from 'react';
import Board from "./Board"

class BoardContainer extends Component {
  state = {
    boards: []
  }

  handleClick = () => {
    this.setState({
      boards: [...this.state.boards, <Board key={this.state.boards.length}/>]
    })
  }

  render(){
    return (
      <div className="board">
      <button className="createBoard" onClick={this.handleClick}>Create New Board</button>
        {this.state.boards}
      </div>
    )
  }
}

export default BoardContainer;
