const { composePlugins, withNx } = require('@nrwl/webpack')
const { merge } = require('webpack-merge')
const { withReact } = require('@nrwl/react')

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config, { options, context }) => {
  return merge(config, {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['postcss-loader'],
        },
      ],
    },
  })
})
