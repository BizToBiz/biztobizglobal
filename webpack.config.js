const { composePlugins, withNx } = require('@nx/webpack')
const { merge } = require('webpack-merge')
const { withReact } = require('@nx/react')

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
