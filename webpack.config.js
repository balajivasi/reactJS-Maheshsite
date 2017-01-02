//const webpack=require('webpack');

var config={
	entry:'./main.js',
	output:{
		path:'./',
		filename:'index.js'
	},
	devServer:{
		inline:true,
		port:1311
	},
	module:{
		loaders:[
			{
				test:/\.jsx?$/,
				exclude:/node_modules/,
				loader:'babel',
				query:{
					presets:['es2015','react']
				}
			}
		],
		resolve:{
			extensions:['.js','.jsx']
		}
	},
	// plugins:[
	//     new webpack.optimize.DedupePlugin(),
	//     new webpack.optimize.OccurenceOrderPlugin(),
	//     new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	//  ]
}

module.exports = config;