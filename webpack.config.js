const path = require('path');
const ExtractTextPlguin = require("extract-text-webpack-plugin");

module.exports = (env) => {
    const isProduction = env === 'production'; // true or false
    const CSSExtract = new ExtractTextPlguin('styles.css'); // be faster load 

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [ 
                        'css-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico)$/,
                exclude: /node_modules/,
                loader: 'file-loader?name=[name].[ext]'
             }]
        },
        // any plugins add
        plugins: [
            CSSExtract
        ],
        // source-map: slow build but production -> for real server
        // inline-source-map: slow build and not production (not be minimalized)-> it's for dev-server
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
}