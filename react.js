const rules = require('./rules');


module.exports = {
  parser: 'babel-eslint',

  extends: ['eslint-config-airbnb-base', 'plugin:react/recommended'],

  env: {
    browser: true,
    node: true,
    es6: true
  },

  globals: {
    expect: true,
    jest: true
  },

  rules: Object.assign({}, rules, {
    // empty
  })
};
