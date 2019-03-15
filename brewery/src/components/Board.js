import React, { Component } from 'react';

class Board extends Component {
  render(){
    return (
      <div className="boardCard">
      Board Card
      {this.props.name}
      </div>
    )
  }
}

export default Board;
