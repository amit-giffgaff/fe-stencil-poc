exports.config = {
  namespace: 'components',
  generateDistribution: true,
  bundles: [
    { components: ['ggc-textbox', 'ggc-page-header', 'ggc-button', 'ggc-copybox'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
