module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:jest/recommended'],
  plugins: ['babel', 'import', 'jsx-a11y', 'react', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      configFile: './babel.config.js',
    },
  },
  rules: {
    'arrow-body-style': 'off', // Это - не наш стиль?
    'no-plusplus': 'off',

    'no-console': 'error', // airbnb использует предупреждение
    'no-alert': 'error', // airbnb использует предупреждение

    'no-param-reassign': 'off', // Это - не наш стиль?

    'react/require-default-props': 'off', // airbnb использует уведомление об ошибке
    'react/forbid-prop-types': 'off', // airbnb использует уведомление об ошибке
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb использует .jsx

    'prefer-destructuring': 'off',

    'react/no-did-mount-set-state': 'off',
    'react/jsx-one-expression-per-line': 'off',

    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ], // для ошибки вложенных свойств htmlFor элементов label

    'prettier/prettier': ['error'],
  },
};
