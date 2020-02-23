import React from 'react'
import Tile from './Tile'

class Tiles extends React.Component {
  
  renderAllHogs(){
    return this.props.hogs.map(hog => <Tile name={hog.name} img={this.renderImg(hog)} specialty={hog.specialty} weight={hog.weight} highestMedal={hog['highest medal achieved']} /> )
  }
    
  renderImg(hog){
    return `hog-imgs/${hog.name.toLowerCase().split(" ").join("_")}.jpg`
  }

  render() { 
    return ( 
      <div>
        {this.renderAllHogs()}
      </div>

     );
  }
}
 
export default Tiles;