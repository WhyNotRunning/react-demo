import React from 'react'
import ReactDom from 'react-dom';
import './scss/index.scss'
import getRouter from './router/router';

ReactDom.render(getRouter(), document.getElementById('app'));
// var BodyDom = React.createClass({
// 	render: function() {
// 		return <div>
// 			<Header />
// 			<Banner arrange={{background:"#2776E4 url(../images/h5.jpg) no-repeat center center",height:"284px"}}/>
// 			<Container />
// 			<PageFooter />
// 		</div>;
// 	}
// });
// ReactDOM.render(
// 	<BodyDom />, document.body
// );