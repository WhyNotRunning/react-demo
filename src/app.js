import cats from './cats'
import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom';
import Hello from './components/hello'
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Container from './components/container/container'
import PageFooter from './components/footer/footer'
// import CallApply from './function/caller-callee-call-apply'
import './scss/reactdemo'

// $('<h1>Cats</h1>').appendTo('body');
// const ul = $('<ul></ul>').appendTo('body');
// for (const cat of cats) {
// 	$('<li></li>').text(cat).appendTo(ul);
// }
// ReactDOM.render(
// 	<Hello name="World" />,
// 	document.getElementById('container')
// );
var BodyDom = React.createClass({
	render: function() {
		return <div>
			<Header />
			<Banner arrange={{background:"#2776E4 url(../images/h5.jpg) no-repeat center center",height:"284px"}}/>
			<Container />
			<PageFooter />
		</div>;
	}
});
ReactDOM.render(
	<BodyDom />, document.body
);