const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = (env, argv)=>({
    entry:'./src/index.ts',
    output: {
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [{
            test:/\.tsx?$/,
            use:'ts-loader',
            exclude: /node_modules/
        }]
    },
    devtool: argv.mode === 'production' ? false : 'inline-source-map',
    devServer:{
        contentBase: './dist',
        stats: 'errors-only',
        compress: false,
        host:'localhost',
        port:'3001'
    },
    plugins:[
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:['./dist']
        }),
        new HtmlWebpackPlugin({
            template: './src/template/tpl.html'
        })
    ]
});