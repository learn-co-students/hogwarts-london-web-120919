import React, { Component } from 'react';
import Tile from './Tile';

class Tiles extends Component {
	constructor(props) {
		super(props);
		this.state = {
			greased: false,
			nameSorted: false,
			weightSorted: false
		};
	}

	weightSort = () => {
		if (this.state.nameSorted && !this.state.weightSorted) {
			this.setState({
				weightSorted: !this.state.weightSorted,
				nameSorted: false
			});
		} else {
			this.setState({
				weightSorted: !this.state.weightSorted
			});
		}
	};

	nameSort = () => {
		if (this.state.weightSorted && !this.state.nameSorted) {
			this.setState({
				nameSorted: !this.state.nameSorted,
				weightSorted: false
			});
		} else {
			this.setState({
				nameSorted: !this.state.nameSorted
			});
		}
	};

	isGreased = () => {
		this.setState({
			greased: !this.state.greased
		});
	};

	getHogs = () => {
		let hogsArray = this.props.hogs.map((hog, id) =>
			this.state.greased && !hog.greased ? null : <Tile hog={hog} key={id} />
		);
		return hogsArray;
	};

	sortHogs = () => {
		let hogsArray = this.getHogs();
		hogsArray = hogsArray.filter(e => e);
		if (this.state.nameSorted) {
			return hogsArray.sort((a, b) =>
				a.props.hog.name.localeCompare(b.props.hog.name)
			);
		} else if (this.state.weightSorted) {
			return hogsArray.sort((a, b) =>
				a.props.hog.weight
					.toString()
					.localeCompare(b.props.hog.weight.toString(), { numeric: true })
			);
		} else {
			return hogsArray;
		}
	};

	render() {
		return (
			<div>
				<div>
					<button onClick={this.isGreased}>
						{this.state.greased ? 'Show all hogs' : 'Show only greased hogs'}
					</button>
					<button onClick={this.nameSort}>Sort by name?</button>
					<button onClick={this.weightSort}>Sort by weight?</button>
				</div>
				<br />
				<div className='ui grid container'>{this.sortHogs()}</div>
			</div>
		);
	}
}

export default Tiles;
