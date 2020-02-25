const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
	//context: path.resolve(__dirname, 'web'),
	mode: 'development',
	entry: {
		main: path.resolve(__dirname,'web/js/header.js')
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname,'web/dist')
	},
	plugins:[
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname,'web/index.html')
		}),
		new CleanWebpackPlugin()
	]
}