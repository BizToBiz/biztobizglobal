const nrwlConfig = require('@nx/react/plugins/webpack.js')

module.exports = (config) => {
  nrwlConfig(config, {})
  config.module.hashFunction = 'xxhash64'
  return {
    ...config,
    module: {
      rules: [
        ...config.module.rules,
        {
          test: /\.css$/,
          use: [
            {
              loader: 'postcss-loader',
            },
          ],
        },
      ],
    },
    ignoreWarnings: [/Failed to parse source map/],
  }
}
