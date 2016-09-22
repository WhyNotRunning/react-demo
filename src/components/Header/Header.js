import React from 'react'

// require('./Header.scss')

var headerDatas = require('./Header.json');

module.exports = React.createClass({
	render: function() {
		console.log(headerDatas);
		let liDoms = [];
		headerDatas.forEach(function(value, index) {
			liDoms.push(<li><a href={value.url}>{value.title}</a></li>);
		});
		return <div className='header'><ul>{liDoms}</ul></div>
	}
});