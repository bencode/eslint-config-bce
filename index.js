var exports = module.exports = Object.assign({}, require('eslint-config-bcd'));


assign(exports, {
  ecmaFeatures: {
    arrowFunctions: true,
    blockBindings: true,
    classes: true,
    defaultParams: true,
    destructuring: true,
    forOf: true,
    generators: true,
    modules: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true,
    jsx: true
  }
});


exports.rules = Object.assign({}, exports.rules, {
  'no-var': 2,
  indent: [2, 2]
});
