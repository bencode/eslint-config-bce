module.exports = {
  extends: require.resolve('eslint-config-airbnb-base'),

  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true
  },

  rules: require('./rules')
};
