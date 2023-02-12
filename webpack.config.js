const nrwlConfig = require('@nrwl/react/plugins/webpack.js')

module.exports = (config) => {
  nrwlConfig(config)
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
    output: {
      hashFunction: 'xxhash64',
    },
  }
}
