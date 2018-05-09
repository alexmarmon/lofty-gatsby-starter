// add eslint to all javascript files
exports.modifyWebpackConfig = ({ config, stage }) => {
  config.loader('eslint', {
    test: /\.js$/,
    exclude: /node_modules/,
  })
  return config
}
