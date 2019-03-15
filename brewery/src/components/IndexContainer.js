import React, { Component } from 'react';
import BrewCard from "./BrewCards"

class IndexContainer extends Component {
  state = {
    breweries: []
  }

  componentDidMount = ()=> {
    fetch('https://api.openbrewerydb.org/breweries')
    .then(resp => resp.json())
    .then(breweriesData => this.setState({
      breweries: breweriesData
    }))
  }


  render(){
    let brewCards = this.state.breweries.map((beer) => {
      return <BrewCard key={beer.id} beerObj={beer} boards={this.props.boards} beerMover={this.props.beerMover}/>
    })

    return (
      <div className="index">
      <div>Index</div>
        {brewCards}
      </div>
    )
  }
}

export default IndexContainer;
