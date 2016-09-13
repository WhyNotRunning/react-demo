const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require("./webpack.config.js");
const open = require('open');

// config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
new WebpackDevServer(webpack(config), {
		publicPath: '/assets/',
		contentBase: './src/',
		hot: true,
		noInfo: true
	})
	.listen(8080, 'localhost', (err) => {
		if (err) {
			console.log(err);
		}
		console.log('Listening at localhost:' + 8080);
		console.log('Opening your system browser...');
		open('http://localhost:' + 8080);
	});