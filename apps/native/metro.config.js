const { withNxMetro } = require('@nx/react-native')

module.exports = withNxMetro(
  {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
  },
  {
    // Change this to true to see debugging info.
    // Useful if you have issues resolving modules
    projectRoot: __dirname,
    watchFolders: [],
    debug: false,
    // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx'
    extensions: ['cjs'],
  },
)
