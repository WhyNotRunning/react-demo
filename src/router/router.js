import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Container from './components/container/container'
import PageFooter from './components/footer/footer'

// import Home from '../pages/Home/Home';
// import Page1 from '../pages/Page1/Page1';


const getRouter = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">首页</Link></li>
				<li><Link to="/page1">Page1</Link></li>
			</ul>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/page1" component={Page1}/>
			</Switch>
		</div>
	</Router>
);

export default getRouter;