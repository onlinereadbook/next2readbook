module.exports = {
    webpack: (config, { dev }) => {
        // Remove minifed react aliases for material-ui so production builds work
        if (config.resolve.alias) {
            delete config.resolve.alias.react
            delete config.resolve.alias['react-dom']
        }

        const DEBUG = !process.argv.includes('--release');
        const VERBOSE = process.argv.includes('--verbose');
        const INTL_REQUIRE_DESCRIPTIONS = true;
        const isDebug = !!dev;

        config.module.rules.push(
            {
                test: /\.scss$/,
                use: [
                    'isomorphic-style-loader',
                    'raw-loader',
                    {
                        loader: 'emit-file-loader',
                        options: {
                            name: 'dist/[path][name].[ext]'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // CSS Loader https://github.com/webpack/css-loader
                            importLoaders: 1,
                            sourceMap: isDebug,
                            // CSS Modules https://github.com/css-modules/css-modules
                            modules: true,
                            localIdentName: isDebug ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
                            // CSS Nano http://cssnano.co/options/
                            minimize: !isDebug,
                            discardComments: { removeAll: true },
                        },
                    },
                    'postcss-loader',
                ]
            },
            {
                test: /\.css/,
                loaders: [
                    'isomorphic-style-loader',
                    `css-loader?${JSON.stringify({
                        sourceMap: DEBUG,
                        // CSS Modules https://github.com/css-modules/css-modules
                        modules: true,
                        localIdentName: DEBUG ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
                        // CSS Nano http://cssnano.co/options/
                        minimize: !DEBUG,
                    })}`,
                    'postcss-loader?pack=default',
                ],
            },
        )
        return config
    }
}