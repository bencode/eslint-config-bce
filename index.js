module.exports = {
  extends: require.resolve('eslint-config-airbnb-base'),

  env: {
    node: true,
    commonjs: true,
    es6: true,
    mocha: true,
    jest: true
  },

  rules: require('./rules')
};
