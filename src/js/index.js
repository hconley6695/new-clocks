// Javascript Entry Point
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Route, Router, hashHistory, IndexRoute } from 'react-router';
import Home from './home';
import Dashboard from './dashboard';
import CurrentTime from './current_time';



ReactDom.render  ((
	<Router history={hashHistory}>
		<Route path="/" component={Dashboard}>
			<IndexRoute component={Home}/>
			<Route path="/current_time" component={CurrentTime}/>
		</Route>
	</Router>

	), document.querySelector('.app'));

//			<Route path="/timer" component={Timer}/>
//			<Route path="/countdown" component={Countdown}/>