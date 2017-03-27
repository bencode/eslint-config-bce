module.exports = {
  extends: 'eslint-config-airbnb-base',

  env: {
    node: true,
    es6: true,
    mocha: true
  },

  rules: {
    strict: 0,
    'comma-dangle': [2, 'never'],
    'func-names': 0,
    'prefer-arrow-callback': 0,
    'space-before-function-paren': [2, 'never'],
    'object-shorthand': 0,
    'no-use-before-define': [2, { functions: false }],
    'no-plusplus': 0,
    'prefer-template': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    'no-unused-expressions': 0,
    'no-nested-ternary': 0,
    'arrow-parens': 0,
    'prefer-rest-params': 0,
    'no-mixed-operators': 0,
    'arrow-body-style': 0,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'no-multi-assign': 0,
    'spaced-comment': 0,
    'guard-for-in': 0,
    'prefer-spread': 0,
    'require-yield': 0,
    'class-methods-use-this': 0
  }
};
