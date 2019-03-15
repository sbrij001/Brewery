import React, { Component } from 'react';
import Board from "./Board"

class BoardContainer extends Component {
  state = {
    name:""
  }

  handleClick = (e) => {
    e.preventDefault()
    let board = this.state.name
    this.props.onSubmit(board)
  }

// gets the info from the user
  inputButtonFunc = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  spitOutBoards = () => {
    
    let boardies = this.props.userBoards.map(board => {
      return "hi";
    })
  }

  render(){

    return (
      <div className="board">
      <form onSubmit={this.handleClick}>
        Create Board:
        <input
        type="text"
        placeholder="Enter Board Name"
        name="name"
        value={this.state.name}
        onChange={this.inputButtonFunc}/>
        <input type="submit" value="Submit" name="submit"/>
      </form>
        {this.props.userBoards}
      </div>
    )
  }
}
// <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
// Name: <input type="text" name="fname">
// <input type="submit" value="Submit">
// </form>
// <button className="create" onClick={this.handleClick}>Create New Board</button>
//   {this.state.boards}
export default BoardContainer;
