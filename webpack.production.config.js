/* eslint-disable */
var path              = require('path'),
		webpack           = require('webpack'),
		autoprefixer      = require('autoprefixer'),
		OpenBrowserPlugin = require('open-browser-webpack-plugin'),
		ExtractTextPlugin = require('extract-text-webpack-plugin'),
		uglifyJsPlugin    = webpack.optimize.UglifyJsPlugin;

module.exports = {
	entry: [
		'babel-polyfill',
		path.resolve(__dirname, 'src/app.jsx')
	],
	output: {
		path: __dirname,
		filename: './dist/bundle.js',
	},
	module: {
		loaders: [
			{
				// JSX files :
				test: /\.js[x]?$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader?presets[]=es2015&presets[]=react',
			},
			{
				// File loader
	      test: /\.(eot|ttf|woff|woff2|svg|gif|png|jpeg|jpg)$/,
	      loader: "file-loader?name=[path][name].[ext]"
	    },
			{
					// CSS files :
					test: /\.css?$/,
					include: path.resolve(__dirname, 'src'),
					loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
			},
			{
				// SCSS files :
				test: /\.scss?$/,
				include: path.resolve(__dirname, 'src'),
				loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader')
			}
		],
	},
	postcss: [
		autoprefixer({ browsers: ['last 3 versions'] }),
	],
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new ExtractTextPlugin('./dist/style.css', { allChunks: true }),
		new uglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
	],
	// Create Sourcemaps for the bundle
	devtool: 'source-map',
};
