module.exports = {
  extends: 'eslint-config-airbnb-base',

  env: {
    node: true,
    es6: true,
    mocha: true
  },

  rules: {
    'arrow-parens': [2, 'as-needed'],
    'arrow-body-style': 0,  // [2, 'as-needed'],
    'comma-dangle': [2, 'never'],
    'func-names': 0,
    'global-require': 0,
    'guard-for-in': 0,
    'no-use-before-define': [2, { functions: false }],
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'no-nested-ternary': 0,
    'no-multi-assign': 0,
    'no-multi-spaces': [2, { ignoreEOLComments: true }],
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    'no-mixed-operators': 0,
    'no-restricted-syntax': 0,
    'object-curly-newline': [2, { consistent: true }],
    'object-shorthand': 0,
    'prefer-template': 0,
    'prefer-arrow-callback': 0,
    'prefer-rest-params': 0,
    'prefer-spread': 0,
    'prefer-destructuring': 0,
    'space-before-function-paren': [2, 'never'],
    'spaced-comment': 0,

    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0
  }
};
