import React from 'react'

class Tile extends React.Component {
  constructor(){
    super()
    this.state = {
      click: false
    }
  }

  

  renderBasicHog(name, img){
    return (<div>
      <h2>{name}</h2>,
      <img src={img} alt=""/>
    </div>)
  }

  renderAllDetails(name, img, specialty, weight, highestMedal){
    return (<div>
      <h2>{name}</h2>,
      <img src={img} alt=""/>
      <p>specialty: {specialty}</p>
      <p>weight: {weight}</p>
      <p>highestMedal: {highestMedal}</p>

    </div>)
  }

  handleClick = () => {
      this.setState({
      click: !this.state.click
    }) 
  }

    
  render () { 
    const {name, img, specialty, weight, highestMedal} = this.props

    return ( 
      <div onClick={this.handleClick}>
        {this.state.click ? this.renderAllDetails(name, img, specialty, weight, highestMedal) : this.renderBasicHog(name, img)}
      </div>
     );
  }

}
 
export default Tile;