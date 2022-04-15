const path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const AngularWebpackPlugin = require('@ngtools/webpack').AngularWebpackPlugin;
const AngularWebpackLoaderPath = require('@ngtools/webpack').AngularWebpackLoaderPath;


const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = {
    entry: {
        'polyfills': './public/polyfills.ts',
        'vendor': './public/vendor.ts',
        'ng1': './public/index.ts',
        'app': './public/main.ts',
    },
    output: {
        path: helpers.root('dist/dev'),
        publicPath: "/",
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "@ngtools/webpack",
                }
            },
            // {
            //     test: /\.ts$/,
            //     use: ['ts-loader', 'angular2-template-loader']
            //
            // },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minChunks: Infinity,
        }
    },
    devtool: "source-map",
    plugins: [

       new webpack.SourceMapDevToolPlugin({
            filename: "[file].map",
            moduleFilenameTemplate: "[resource-path]",
            fallbackModuleFilenameTemplate: "[resource-path]?[hash]",
            sourceRoot: "webpack:///"
        }),
        new HtmlWebpackPlugin({
            template: "config/index.html"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                "ENV": JSON.stringify(ENV)
            }
        }),    new AngularWebpackPlugin({
            tsconfig: './tsconfig.json',
            compilerOptions:{}
        }),
        new webpack.ContextReplacementPlugin(
            /(.+)?angular(\\|\/)core(.+)?/,
            helpers.root('src'), // location of your src
            {} // a map of your routes
        ),
 /*       new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        })*/
    ]
}