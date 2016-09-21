var path = require('path');
var webpack = require('webpack');

module.exports = {
	resolve: {
		// Make sure, Webpack finds import'ed and require'd files specified without extension
		// so 'import Bla from './Bla' makes webpack to look for files 'Bla', 'Bla.js' and 'Bla.jsx'
		extensions: ['', '.js', '.jsx']
	},
	entry: './src/app.js',
	output: {
   path: './bin',
   filename: 'app.bundle.js'
 },
	module: {
		loaders: [
			// JSX/ES6 handling with babel
			// * babel-loader: uses Babel to transform your JSX/ES6 JavaScript to ECMAScript 5
			// * react-hot: Reloads your React Component on code changes without loosing the application state
			{
				loader: 'babel-loader',
				include: [
					path.resolve(__dirname, "src"),
				],
	      test: /.jsx?$/,
			  query: {
					plugins: ['transform-runtime'],
					presets: ['es2015', 'stage-0', 'react'],
				}
      },
			// CSS handling
			// * style-loader: Embeds referenced CSS code using a <style>-element in your index.html file
			// * css-loader: Parses the actual CSS files referenced from your code. Modifies url()-statements in your
			//   CSS files to match images handled by url loader (see below)
			{
				loader: 'style!css',
				include: [
					path.resolve(__dirname, "src"),
				],
				test: /\.css$/,
			},
			// SCSS handling
			// * sass loader: transpiles scss files into css stylesheets
			{
				loaders: ["style", "css", "sass"],
				test: /\.sccs$/,
			},
			// Image Handling
			// * url-loader: Returns all referenced png/jpg files up to the specified limit as inline Data Url
			//   or - if above that limit - copies the file to your output directory and returns the url to that copied file
			//   Both values can be used for example for the 'src' attribute on an <img> element
			{
				loader: 'url?limit=25000',
				test: /\.(png|jpg)$/
			},

			// JSon file handling
			// * Enables you to 'require'/'import' json files from your JS files
			{
				loader: 'json-loader',
				test: /\.json$/
			},
			{
			  test: /\.html$/,
			  loader: "file?name=[name].[ext]",
			},
		]
	},
	plugins: [
		// Enable Hot Module Replacement
		new webpack.HotModuleReplacementPlugin(),

		// Avoid publishing files when compilation failed
		new webpack.NoErrorsPlugin(),

		// minify's the output of the bundle
		new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
	],
	stats: {

		// Nice colored output
		colors: true
	},

	// Create Sourcemaps for the bundle
	devtool: 'source-map'
};
