module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/recommended', '@vue/airbnb'],
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
    rules: {
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'array-element-newline': ['error', 'consistent'],
        indent: ['error', 4, { MemberExpression: 0, SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }],
        quotes: ['error', 'single'],
        'comma-dangle': ['error', 'always-multiline'],
        semi: ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'max-len': ['error', 200],
        'no-new': 'off',
        'linebreak-style': 'off',
        'import/extensions': 'off',
        'eol-last': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'warn',
        'import/no-cycle': 'off',
        'arrow-parens': 'off',
        eqeqeq: 'off',
        'no-param-reassign': 'off',
        'import/prefer-default-export': 'off',
        'no-use-before-define': 'off',
        'no-continue': 'off',
        'prefer-destructuring': 'off',
        'no-plusplus': 'off',
        'prefer-const': 'off',
        'global-require': 'off',
        'no-prototype-builtins': 'off',
        'consistent-return': 'off',
        'vue/require-component-is': 'off',
        'prefer-template': 'off',
        'one-var-declaration-per-line': 'off',
        'one-var': 'off',
        'import/named': 'off',
        'object-curly-newline': 'off',
        'default-case': 'off',
        'import/order': 'off',
        'no-trailing-spaces': 'off',
        'func-names': 'off',
        radix: 'off',
        'no-unused-expressions': 'off',
        'no-underscore-dangle': 'off',
        'no-nested-ternary': 'off',
        'no-restricted-syntax': 'off',
        'no-mixed-operators': 'off',
        'no-await-in-loop': 'off',
        'template-curly-spacing': 'off',
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        'vue/html-self-closing': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'no-return-assign': 'off',
        'vue/multi-word-component-names': 'off',
        'vuejs-accessibility/click-events-have-key-events': 'off',
        'vuejs-accessibility/mouse-events-have-key-events': 'off',
        'vuejs-accessibility/alt-text': 'off',
        'vue/no-mutating-props': 'off',
    },
}
