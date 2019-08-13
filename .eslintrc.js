const rules = {
  'accessor-pairs': 'error',
  'array-bracket-spacing': 'error',
  'array-callback-return': 'off',
  'arrow-body-style': 'error',
  'arrow-parens': 'error',
  'arrow-spacing': 'error',
  'block-scoped-var': 'error',
  'block-spacing': 'error',
  'brace-style': [
    'error',
    '1tbs',
    {
      allowSingleLine: true
    }
  ],
  camelcase: ['error', { properties: 'never' }],
  'comma-dangle': ['error', 'never'],
  'comma-spacing': 'error',
  complexity: 'error',
  'computed-property-spacing': 'error',
  'consistent-return': 'error',
  'consistent-this': 'error',
  curly: ['error', 'multi-line'],
  'default-case': 'error',
  'dot-location': ['error', 'property'],
  'dot-notation': 'error',
  'eol-last': 'error',
  eqeqeq: 'error',
  'func-call-spacing': 'error',
  'func-names': 'off',
  'func-style': 'off',
  'generator-star-spacing': 'error',
  'guard-for-in': 'error',
  'init-declaration': 'off',
  'key-spacing': 'error',
  'keyword-spacing': 'error',
  'linebreak-style': 'off',
  'lines-around-comment': [
    'error',
    {
      beforeBlockComment: true,
      afterBlockComment: false,
      allowBlockStart: true,
      allowBlockEnd: true,
      allowObjectStart: true,
      allowObjectEnd: true,
      allowArrayStart: true,
      allowArrayEnd: true
    }
  ],
  'max-depth': 'error',
  'max-nested-callbacks': 'error',
  'max-params': 'error',
  'max-statements': 'off',
  'new-cap': ['error', { capIsNewExceptions: ['A', 'RSVP'] }],
  'new-parens': 'error',
  'newline-after-var': 'error',
  'newline-before-return': 'error',
  'newline-per-chained-call': 'off',
  'no-array-constructor': 'error',
  'no-bitwise': 'error',
  'no-confusing-arrow': [2, {
    'allowParens': true,
  }],
  'no-continue': 'error',
  'no-else-return': ['error', { allowElseIf: true }],
  'no-extra-parens': ['error', 'all', { nestedBinaryExpressions: false }],
  'no-lonely-if': 'error',
  'no-multiple-empty-lines': 'error',
  'no-negated-condition': 'off',
  'no-nested-ternary': 'error',
  'no-new-object': 'error',
  'no-trailing-spaces': 'error',
  'no-underscore-dangle': ['error', { allowAfterThis: true }],
  'no-unneeded-ternary': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-constructor': 'error',
  'no-whitespace-before-property': 'error',
  'no-var': 'error',
  'object-shorthand': 'error',
  'template-curly-spacing': 'error',
  'yield-star-spacing': 'error',
  'prefer-arrow-callback': 'error',
  'prefer-const': 'error',
  'prefer-reflect': 'off',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'object-curly-spacing': ['error', 'always'],
  'one-var': ['error', 'never'],
  'one-var-declaration-per-line': 'error',
  'operator-assignment': ['error', 'never'],
  'operator-linebreak': [
    'error',
    'after',
    {
      overrides: { '?': 'before', ':': 'before' }
    }
  ],
  'padded-blocks': 'off',
  'prettier/prettier': 'error',
  'quote-props': ['error', 'as-needed'],
  quotes: ['error', 'single', 'avoid-escape'],
  semi: 'error',
  'semi-spacing': 'error',
  'sort-vars': 'off',
  'space-before-blocks': 'error',
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }
  ],
  'space-in-parens': 'error',
  'space-infix-ops': 'error',
  'space-unary-ops': 'error',
  'spaced-comment': [
    'error',
    'always',
    {
      exceptions: ['-', '=', '/', '*']
    }
  ],
  'valid-jsdoc': 'off',
  'valid-typeof': 'error'
};

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      impliedStrict: true
    },
    sourceType: 'module'
  },
  plugins: ['prettier'],
  extends: ['prettier'],
  env: {
    browser: true,
    es6: true
  },
  rules
};
