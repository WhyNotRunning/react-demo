import React from 'react'
import { Router, Route, Link, browserHistory, hashHistory, IndexRedirect} from 'react-router'
import App from '../components/hello'
import Login from '../pages/login'


const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


// 路由配置说明（你不用加载整个配置，
// 只需加载一个你想要的根路由，
// 也可以延迟加载这个配置）。
const getRouter = () => (
	<Router history={history}>
		<Route path="/" component={App}>
			<Route path="login" component={Login}/>
			<Route path="*" component={NoMatch}/>
		</Route>
	</Router>
);

export default getRouter;