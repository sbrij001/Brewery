import React, { Component } from 'react';

class Board extends Component {
  state ={
    myBoards: []
  }

  myboardsFunc = () => {
    this.setState({
      myBoards: [...this.state.myBoards, this.props.userBrew]
    })
  }

  render(){
    // debugger
    return (
      <div className="boardCard">
      Board Card
      <p>{this.props.name}</p>
      {this.props.userBrew}
      </div>
    )
  }
}

export default Board;
