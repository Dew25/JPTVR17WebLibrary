const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
	//context: path.resolve(__dirname, 'web'),
	mode: 'development',
	entry: {
		main: path.resolve(__dirname,'web/js/App.js')
	},
	output: {
		filename: 'dist/[name].[contenthash].js',//файл будет создан в web/dist
		path: path.resolve(__dirname,'web')// файл index.html подключенным js из web/dist
	},
	plugins:[
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname,'web/template/index.html')// шаблон, по которому будет строиться web/index.html
		}),
		//new CleanWebpackPlugin(path.resolve(__dirname,'web/dist'))
	]
}