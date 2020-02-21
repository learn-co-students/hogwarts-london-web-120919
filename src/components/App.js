import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import Tiles from './Tiles';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Nav />
				<Tiles hogs={hogs} />
			</div>
		);
	}
}

export default App;
