module.exports = {
    webpack: (config, { dev }) => {
        // Perform customizations to config
        exclude: [
            /\.html$/,
            /\.(js|jsx)$/,
            /\.css$/,
            /\.json$/,
            /\.svg$/,
            /\.s(c|a)ss$/,
        ], {
                test: /\.s(a|c)ss$/,
                loader: 'style!css?importLoaders=2!postcss!sass?sourceMap&outputStyle=expanded'
            }
        //            {
        //     test: /\.s(a|c)ss$/,
        //     loader: ExtractTextPlugin.extract('style', 'css?importLoaders=2!postcss!sass?outputStyle=compressed')
        //   },
        // Important: return the modified config
        return config
    }
}