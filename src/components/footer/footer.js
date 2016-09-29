import React from 'react'

module.exports = React.createClass({
	render: function() {
		var styleObj = {};
		// console.log(this.props);
		// // 如果props属性中指定了，则使用
		// if (this.props.arrange) {
		// 	styleObj = this.props.arrange;
		// }
		return <div className="page-footer" >
			<div className="footer-inner">
				<dl>
					<dt>友情链接</dt>
					<dd>
						<ul>
							<li><a href="www.iwooto.com">H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt>我们的项目</dt>
					<dd>
						<ul>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
							<li><a>H5 页面制作工具</a></li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt>加入我们</dt>
					<dd>
						<p>FEX 是百度「Web 前端研发部」的内部名称，其中 FE 是 Front End 的缩写，X 代表我们不仅关注前端技术，还更重视全端及全栈的能力。</p>
						<p>如果你对这个团队感兴趣，可以【更多了解一下】。</p>
					</dd>
				</dl>
			</div>
		</div>;
	}
});