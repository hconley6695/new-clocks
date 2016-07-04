import React, {Component} from 'react';
import {Route, Router, hashHistory, Link} from 'react-router';


export default class Dashboard extends Component {
	render () {
		return (
			<div className="dashboard-div">
				<header>
					<img src="./images/victorian-clock.jpg" alt="Victorian Clock" height="300" width="300"/>
					<h1>Do you have the time?</h1>
				</header>

				<aside className="sidebar">
					<ul>
						<li><Link to="/">HOME</Link></li>
						<li><Link to="/clock">CURRENT TIME</Link></li>
						<li><Link to="/timer">TIMER</Link></li>
						<li><Link to="/countdown">COUNTDOWN CLOCK</Link></li>
					</ul>
				</aside>

				<div className="main">
					{this.props.children}
				</div>

				<footer>
					
				</footer>
			</div>
		);
	}
}