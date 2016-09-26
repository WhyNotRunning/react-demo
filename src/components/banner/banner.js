import React from 'react'

module.exports = React.createClass({
	render: function() {
		var styleObj = {};
		console.log(this.props);
		// 如果props属性中指定了，则使用
		if (this.props.arrange) {
			styleObj = this.props.arrange;
		}
		return <div className="banner" style={styleObj}><a href="http://h5.baidu.com/" target="_blank"></a></div>;
	}
});