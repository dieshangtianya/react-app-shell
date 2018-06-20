const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: __dirname + '/src/main.js',
    mode: 'development',
    output: {
        path: __dirname + "/public",
        filename: 'index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public',
        inline: true,
        port: 8080,
        https: true
    },
    module: {
        //below are kinds of loaders
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'//support @import and url(...) to implement the require()
                    }, {
                        loader: 'css-loader', //add css style to js file
                        options:{
                            //modules: true, // specify to true that css will define to a module which we can reference by module grammar.
                            //localIdentName: '[name]__[local]--[hash:base64:5]' //specify the format of css class name
                        }
                    }]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html"
        })
    ]
};

module.exports = config;