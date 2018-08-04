module.exports = {
  extends: 'eslint-config-airbnb-base',

  env: {
    node: true,
    es6: true,
    mocha: true
  },

  rules: require('./rules')
};
