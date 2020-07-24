import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// COMPONENTS
import Header from '../Header/Header';
//Routes
import Swatches from '../pages/Swatches/Swatches';
import Colors from '../pages/Colors/Colors';
class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Header />

					<div className='container'>
						<Route path='/' exact component={Swatches} />
						<Route path='/' exact component={Colors} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
