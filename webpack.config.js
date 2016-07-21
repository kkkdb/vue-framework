// npm run dev
module.exports = {
	entry: './src/main.js',
	output: {
		path: './dist',
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.vue$/,
			loader: 'vue'
		}/*, {
			test: require.resolve("./lib/jQuery/jQuery-2.2.0.min.js"),
			loader: "exports?jQuery"
		}, {
			test: require.resolve("./lib/bootstrap/js/bootstrap.min.js"),
			loader: "exports?Bootstrap"
		}, {
			test: require.resolve("./lib/adminLTE/js/app.min.js"),
			loader: "exports?AdminLTE"
		}*/
		]
	},
	// externals: {
	//        jquery: "jQuery",
	//        bootstrap: "Bootstrap",
	//        adminLTE: "AdminLTE"
	//    },
	resolve: {
		extensions: ['', '.js', '.vue']
	}
};