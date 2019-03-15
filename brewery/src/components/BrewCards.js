import React, { Component } from 'react';

class BrewCards extends Component {

  handleMoveBoard = () => {

  }

  render(){
    return (
      <div className="brew" onClick={this.handleMoveBoard}>
      <h2>{this.props.beerObj.name}</h2>
      <p>Phone: {this.props.beerObj.phone} city :{this.props.beerObj.city} State: {this.props.beerObj.state}</p>
      <select>
      <option>board 1</option>
      <option>board 2</option>
      <option>board 3</option>
      </select>
      </div>
    )
  }
}

export default BrewCards;
