import React, { Component } from 'react';

// import pig from `/src/hog-imgs/${this.props.hog.name.split(' ').join('_')}.jpg`

class Tile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		};
	}

	showDeets = () => {
		this.setState({
			clicked: !this.state.clicked
		});
	};

	render() {
		if (this.state.clicked) {
			return (
				<div className='ui eight wide column pigTile' onClick={this.showDeets}>
					<div>
						<h1>Name: {this.props.hog.name}</h1>
						<h2>Specialty: {this.props.hog.specialty}</h2>
						<h2>
							Greased:{' '}
							{this.props.hog.greased
								? 'Squeel like a pig boi!(Greased)'
								: 'Lard me up!(Not Greased)'}
						</h2>
						<h2>Weight: {this.props.hog.weight}</h2>
						{/* <h2>{this.props.hog.highest}</h2> */}
					</div>
				</div>
			);
		} else {
			return (
				<div className='ui eight wide column pigTile' onClick={this.showDeets}>
					<div>
						{this.props.hog.name}
						<im
							src={`/src/hog-imgs/${this.props.hog.name
								.split(' ')
								.join('_')}.jpg`}
						/>
					</div>
				</div>
			);
		}
	}
}

export default Tile;
