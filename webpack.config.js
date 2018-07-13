const path = require('path');
const webpack = require('webpack');
const configw = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

var config = {
	entry:{
		app:'./src/app.js'
	}, 
	output:{
		path: path.resolve(__dirname, 'build'),
	    publicPath: '/',
	    filename: 'js/[name].[chunkhash].js'
	},
	plugins:[
		
		new CleanWebpackPlugin('build'),
		new HtmlWebpackPlugin({
	        template: './src/index.html'
	    }),
	    new ExtractTextPlugin({
	        filename: 'css/app.css'
	    }),
	    new webpack.HashedModuleIdsPlugin(),
	    new webpack.optimize.CommonsChunkPlugin({
	    	name:'vender',
	    	minChunks: function(module) {
	        return (
	          module.resource &&
	          /\.js$/.test(module.resource) &&
	          module.resource.indexOf(
	            path.join(__dirname, './node_modules')
	          ) === 0
	        )
	      }

	    }),
	    new webpack.optimize.CommonsChunkPlugin({
	    	name:'manifest',
	    	minChunks:Infinity
	    }),
	    new VueLoaderPlugin(),
	    
	],
	module:{
		rules: [
				{
		        test: /\.css$/,
		        use: ExtractTextPlugin.extract({
		            fallback: "style-loader",
		            use: ['css-loader']
		        }),
		    },
		    {
		        test: /\.scss$/,
		        use: ExtractTextPlugin.extract({
		            fallback: 'style-loader',
		            use: ['css-loader', 'sass-loader']
		        })
		    },
		    {
		        test: /\.vue$/,
		        loader: 'vue-loader',
		        options: {
		            
		        }
		    },
		    {
		        test: /\.js$/,
		        loader: 'babel-loader',
		        exclude: /node_modules/,
		        query: { 
		          presets: ['env']
		        }
		      }
	     ]
	},
	devServer:{
		contentBase: path.resolve(__dirname, 'build'),
        compress: true, //gzip压缩
        historyApiFallback: true,
        host:'192.168.191.4'
	}


}

if (isProduction){
	config.plugins = (config.plugins || []).concat([
		new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
		new UglifyJsPlugin({
            cache:true,
            sourceMap:false,
            parallel:4,
            uglifyOptions: {
                ecma:8,
                warnings:false,
                compress:{
                    drop_console:true,
                },
                output:{
                    comments:false,
                    beautify:false,
                }
            }
            
        })
	]);
}
module.exports = config;