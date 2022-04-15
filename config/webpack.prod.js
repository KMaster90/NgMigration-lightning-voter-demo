const path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');

const AngularWebpackPlugin = require('@ngtools/webpack').AngularWebpackPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const UglifyJsPlugin = require('uglify-js')

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = {
    entry: {
        'polyfills': './public/polyfills.ts',
        'vendor': './public/vendor-aot.ts',
        'app': './public/main.ts',
    },
    output: {
        path: helpers.root('dist/aot'),
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
                test:  /\.[jt]sx?$/,
                loader: '@ngtools/webpack'

            },
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
        },
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    plugins: [
        new AngularWebpackPlugin({
           tsConfig: './tsconfig.aot.json',
            compilerOptions:{
                genDir: "aot/",
                skipMetadataEmit: true,
            },
           entryModule: helpers.root('public/app/app.module#AppModule')
        }),
        new HtmlWebpackPlugin({
            template: "config/index.html",
            chunks: ['app']
        }),
        // new UglifyJsPlugin({
        //     beautify: false,
        //     comments: false,
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.DefinePlugin({
            "process.env": {
                "ENV": JSON.stringify(ENV)
            }
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