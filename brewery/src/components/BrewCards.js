import React, { Component } from 'react';

class BrewCards extends Component {
  state = {
    boardName: null
  }

  handleMoveBoard = () => {

  }

  boardOptions = () => {
    let newOptionsArr = []
    if(this.props.boards != undefined){
      newOptionsArr = this.props.boards.map((option) => {
        return <option>{option}</option>
      })
    }
    return newOptionsArr;
  }

  submitNewBoard = (e) => {
    e.preventDefault()
    this.props.beerMover(this.props.beerObj, this.state.boardName);
  }

  selectFunc = (e) => {
    this.setState({
      boardName: e.target.value
    })
  }

  render(){
    return (
      <div className="brew" onClick={this.handleMoveBoard}>
      <h2>{this.props.beerObj.name}</h2>
      <p>Phone: {this.props.beerObj.phone} city :{this.props.beerObj.city} State: {this.props.beerObj.state}</p>

      <form onSubmit={this.submitNewBoard}>
        <select onChange={this.selectFunc}>
        <option>Select Board</option>
        {this.boardOptions()}
        </select>
          <input type="submit" value="Submit" name="submit"/>
      </form>
      </div>
    )
  }
}

export default BrewCards;
