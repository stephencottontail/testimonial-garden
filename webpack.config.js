const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const postcssPresetEnv = require( 'postcss-preset-env' );
const defaultConfig = require( './node_modules/@wordpress/scripts/config/webpack.config.js' );

module.exports = {
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                editor: {
                    name: 'editor',
                    test: /editor\.(sc|sa|c)ss$/,
                    enforce: true
                },
                style: {
                    name: 'style',
                    test: /style\.(sc|sa|c)ss$/,
                    enforce: true
                },
            }
        }
    },
    ...defaultConfig,
    module: {
        ...defaultConfig.module,
        rules: [
            ...defaultConfig.module.rules,
            {
                test: /\.(sc|sa|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                postcssPresetEnv( {
                                    stage: 3,
                                    features: {
                                        'custom-media-queries': {
                                            preserve: false
                                        },
                                        'custom-properties': {
                                            preserve: true
                                        },
                                        'nesting-rules': true
                                    }
                                } )
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader'
                    },
                ]
            }
        ]
    },
    plugins: [
        ...defaultConfig.plugins,
        new MiniCssExtractPlugin( {
            filename: '[name].css'
        } )
    ]
};
