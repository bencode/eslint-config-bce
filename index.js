function assign(des) {
  for (var i = 1; i < arguments.length; i++) {
    var src = arguments[i];
    for (var k in src) {
      des[k] = src[k];
    }
  }
  return des;
}


var exports = module.exports = assign({}, require('eslint-config-bcd'));

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

exports.rules = assign({}, exports.rules, {
  'no-var': 2,
  indent: [2, 2]
});
