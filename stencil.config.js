exports.config = {
  namespace: 'components',
  generateDistribution: true,
  bundles: [
    { components: ['ggc-copybox'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
