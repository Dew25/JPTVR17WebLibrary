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
		filename: '[name].[contenthash].js',//файл будет создан в web/dist
		path: path.resolve(__dirname,'web/dist')// файл ../index.html, т.е. в web, подключенным js из web/dist
	},
	plugins:[
		new HTMLWebpackPlugin({
			filename: path.resolve(__dirname,'web/index.html'),//путь к файлу web/index.html
			template: path.resolve(__dirname,'web/template/index.html')// шаблон, по которому будет строиться web/index.html
		}),
		new CleanWebpackPlugin()
	]
}