import cats from './cats'
import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom';
import Hello from './components/hello'
import Header from './components/Header/Header'
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

ReactDOM.render(
	<Header/>, document.body
);