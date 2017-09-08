const webpack = require('webpack');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const path = require("path");
const buildPath = path.resolve(__dirname,'dist/assets/');
const modelsPath = path.resolve(__dirname,'src/models');
const routesPath = path.resolve(__dirname,'src/routes');
const servicesPath = path.resolve(__dirname,'src/services');
const componentsPath = path.resolve(__dirname,'src/components/');
module.exports = {
	scripts: {
		start: "webpack-dev-server --inline --hot",
		build: "webpack --display-error-details",
		watch: "webpack --progress --colors --watch"
	},
	//entry 是页面入口文件配置
	entry: [
		'webpack-dev-server/client?http://localhost:9000/',
		'webpack/hot/dev-server',
		'./src/index.js'
	],
	//output 是对应输出项配置
	output: {
		path: buildPath,
		filename: '[name].js'
	},
	// Example CDN
	/*output: {
	    path: "src/[hash]",
	    publicPath: "./assets/[hash]/"
	}*/

	module: {
		//加载器配置
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			},
		}, { //.css 文件使用 style-loader 和 css-loader 来处理
			test: /\.css$/,
			exclude: /node_modules/,
			loader: 'style-loader!css-loader'
		}, { //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
			test: /\.scss$/,
			exclude: /node_modules/,
			loader: 'style!css!sass?sourceMap'
		}, { //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
			test: /\.(png|jpg)$/,
			exclude: /node_modules/,
			loader: 'url-loader?limit=8192'
		}, {
			test: /\.json$/,
			loader: 'json-loader'
		}]
	},
	//插件项
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
			output: {
				comments: false,
			},
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"development"'
		}),
		new webpack.HotModuleReplacementPlugin(),//如果是server.js好像需要开启
		new webpack.optimize.OccurenceOrderPlugin(),
		/*new HtmlWebpackPlugin({
			inject:true,
			excludeChunks:['test'],
			template:'src/index.html',
			favicon: 'src/img/favicon.ico'
		}),*/
		/*new ExtractTextPlugin(__dirname+"scss/[name].[hash].scss"),*/
		new webpack.NoErrorsPlugin(),
		new WebpackMd5Hash()
	],
	resolve: {
		//查找module的话从这里开始查找
		// root: 'E:/github/flux-example/src', //绝对路径
		//自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
		extensions: ['', '.coffee', '.js', '.coffee', '.jsx', '.json', '.scss'],
		//模块别名定义，方便后续直接引用别名，无须多写长长的地址
		alias: {
			'components': path.join(componentsPath, 'index'),//后续直接 import Banner from 'banner'/require('banner') 即可
            // 'models': path.join(componentsPath, 'footer/footer'),
            // 'PageFooter': path.join(componentsPath, 'footer/footer'),
		}
	}
}