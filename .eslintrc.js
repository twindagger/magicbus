module.exports = {
  env:{
    node: true,
    es6: true
  },
  parserOptions:{
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  plugins: ['unicorn'],
  extends: 'plugin:unicorn/recommended',
  rules: {
    'array-callback-return': 'error',
    'arrow-parens': [ 'error', 'always' ],
    'arrow-spacing': [ 'error', { before: true, after: true } ],
    'arrow-body-style': [ 'error', 'as-needed' ],
    'block-spacing': [ 'error', 'always' ],
    'brace-style': [ 'error', '1tbs' ],
    camelcase: [ 'error', { properties: 'always' } ],
    'class-methods-use-this': 'error',
    'comma-dangle': [ 'error', 'never' ],
    'comma-spacing': [ 'error', { before: false, after: true } ],
    'comma-style': [ 'error', 'last' ],
    'constructor-super': 'error',
    curly: 'error',
    'default-case': [ 'error', { commentPattern: '^no default$' } ],
    'dot-location': [ 'error', 'property' ],
    'dot-notation': 'error',
    'eol-last': 'error',
    eqeqeq: [ 'error', 'smart' ],
    'func-call-spacing': [ 'error', 'never' ],
    'generator-star-spacing': [ 'error', { before: true, after: true } ],
    'guard-for-in': 'error',
    indent: [ 'error', 2, { SwitchCase: 1 } ],
    'key-spacing': [ 'error', {
      beforeColon: false,
      afterColon: true
    }],
    'keyword-spacing': [ 'error', { before: true, after: true } ],
    'max-len': [ 'error', 120, {
      ignoreUrls: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true
    }],
    'new-cap': [ 'error', { newIsCap: true, capIsNew: false } ],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-class-assign': 'error',
    'no-cond-assign': [ 'error', 'always' ],
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': [ 'error', { checkLoops: false } ],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': [ 'error', 'functions' ],
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-mixed-operators': [ 'error', {
      groups: [
        [ '&', '|', '^', '~', '<<', '>>', '>>>' ],
        [ '==', '!=', '===', '!==', '>', '>=', '<', '<=' ],
        [ '&&', '||' ],
        [ 'in', 'instanceof' ]
      ],
      allowSamePrecedence: false
    }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': [ 0 ],
    'no-multi-str': 'error',
    'no-multiple-empty-lines': [ 'error', { max: 1 } ],
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-path-concat': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-syntax': [ 'error', 'LabeledStatement', 'WithStatement' ],
    'no-return-assign': [ 'error', 'except-parens' ],
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unexpected-multiline': 'error',
    'no-unneeded-ternary': [ 'error', { defaultAssignment: false } ],
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': [ 'error', {
      allowTernary: true,
      allowShortCircuit: true
    }],
    'no-unused-labels': 'error',
    'no-unused-vars': [ 'error', {
      vars: 'local',
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_|...props|props',
      args: 'after-used',
      ignoreRestSiblings: true
    }],
    'no-use-before-define': [ 'error', 'nofunc' ],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': [ 'error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false
    }],
    'no-var': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-curly-spacing': [ 'error', 'always' ],
    'object-property-newline': [ 'error', { allowMultiplePropertiesPerLine: true } ],
    'one-var': [ 0 ],
    'operator-assignment': [ 'error', 'always' ],
    'operator-linebreak': [ 'error', 'after', {
      overrides: {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [ 'error', 'never' ],
    'prefer-arrow-callback': 'error',
    quotes: [ 'error', 'single', { avoidEscape: true } ],
    'quote-props': [ 'error', 'as-needed' ],
    radix: 'error',
    'require-yield': 'error',
    'rest-spread-spacing': [ 'error', 'never' ],
    semi: [ 'error', 'never' ],
    'semi-spacing': [ 'error', { before: false, after: true } ],
    'space-before-blocks': [ 'error', 'always' ],
    'space-before-function-paren': [ 'error', 'always' ],
    'space-in-parens': [ 'error', 'never' ],
    'space-infix-ops': 'error',
    'space-unary-ops': [ 'error', { words: true, nonwords: false } ],
    'spaced-comment': [ 'error', 'always', {
      line: { markers: [ '*package', '!', ',' ] },
      block: {
        balanced: true,
        markers: [ '*package', '!', ',' ],
        exceptions: [ '*' ]
      }
    }],
    strict: [ 'error', 'never' ],
    'template-curly-spacing': [ 'error', 'never' ],
    'unicode-bom': [ 'error', 'never' ],
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'wrap-iife': [ 'error', 'any' ],
    'yield-star-spacing': [ 'error', 'both' ],
    yoda: [ 'error', 'never' ],
    'linebreak-style': [ 'error', 'unix' ]
  }
}
