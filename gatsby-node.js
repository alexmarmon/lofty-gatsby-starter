// add eslint to all javascript files
exports.modifyWebpackConfig = ({ config, stage }) => {
  config.loader('eslint', {
    test: /\.js$/,
    exclude: /node_modules/,
  })
  return config;
};

// use different layout for quote page
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/quote/)) {
      // It's assumed that `quote.js` exists in the `/layouts/` directory
      page.layout = "quote";

      // Update the page.
      createPage(page);
    }

    resolve();
  });
};
