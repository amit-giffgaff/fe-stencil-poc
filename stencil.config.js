exports.config = {
  namespace: 'components',
  generateDistribution: true,
  bundles: [
    { components: ['gg-copybox'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
