import React from 'react'
import "./header.scss"


module.exports = React.createClass({
	render: function() {
		return <div className="page-header">
		<a href="/"><div className="logo"></div></a>
		<ul className="page-nav page-navi-index">
		<li><a href="/">首页</a></li> <li> <a href="/articles/">技术</a> </li> <li> <a href="/code/">开源</a> </li> <li> <a target="_blank" href="/we-need-you/">我们需要你</a> </li> <li> <a href="/weekly/">技术周刊</a> </li> <li> <a target="_blank" href="https://github.com/fex-team/">Github</a> </li> <li> <a target="_blank" href="https://speakerdeck.com/baidufe">Slides</a> </li>
		</ul>
		<a href="http://fex.baidu.com/feed.xml" target="_blank" className="rss"></a>
	</div>;
	}
});