import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Tiles from './Tiles';
import hogs from '../porkers_data'

class App extends Component {
  constructor(){
    super()
    this.state = {
      greasedFilter: false,
      sortByName: true
    }
  }


  handleClickGreased = () => {
    this.setState({
      greasedFilter: !this.state.greasedFilter
    })
  }

  handleSortByName = () => {
    this.setState({
      sortByName: !this.state.sortByName
    })
  }

  filterGreased = () => hogs.filter(hog => hog.greased)
  
  sortHogs(hogsToSort, property) {
    return hogsToSort.sort((a, b) => a[property]> b[property] ? 1 : -1)
  }
  
  render() {
    let hogsToRender = this.state.greasedFilter ? this.filterGreased() : hogs

    hogsToRender = this.state.sortByName ? this.sortHogs(hogsToRender, "name") : this.sortHogs(hogsToRender, "weight")
    return (
      <div className="App">
          < Nav />
          <button onClick={this.handleClickGreased}>{this.state.greasedFilter ? "Not Greased" : "Greased"}</button>
          <button onClick={this.handleSortByName}>{ this.state.sortByName ? "Sort Hogs by Weight" : "Sort Hogs by Name"}</button>
          <Tiles hogs={hogsToRender}/>
      </div>
    )
  }
}

export default App;
