'use strict';

var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        app: [
            './app/app.module.js',
            './app/Endscreen/endscreen.service.js',
            './app/Endscreen/endscreen.component.js',
            './app/Endscreen/endscreen.controller.js'
        ],
        vendor: [
            './node_modules/jquery/dist/jquery.js',
            './node_modules/angular/angular.js',
            './node_modules/angular-animate/angular-animate.js',
            './node_modules/angular-aria/angular-aria.js',
            './node_modules/angular-material/angular-material.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app/[name].min.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        new ngAnnotatePlugin({
            add: true
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),

        new CopyWebpackPlugin([
            {
                from: './**/*.html'
            }
        ], {
            ignore: ['node_modules/**/*']
        })
    ]
};