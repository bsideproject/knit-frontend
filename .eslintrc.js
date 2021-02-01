module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['eslint:recommended'],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: { project: './tsconfig.json' },
      settings: { 
        react: { 
          version: 'detect' 
        },
        'import/resolver': {
          alias: {
            map: [['~', '.']],
            extensions: ['.js', '.ts', '.tsx'],
          },
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'airbnb-typescript', // airbnb rules,
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier/@typescript-eslint', // Prettier plugin
        'plugin:prettier/recommended', // Prettier recommended rules
      ],
      rules: {
        // We will use TypeScript's types for component props instead
        'react/prop-types': 'off',
        // No need to import React when using Next.js
        'react/react-in-jsx-scope': 'off',
        // allow one line expression
        'react/jsx-one-expression-per-line': 'off',
        // allow prop spreading
        'react/jsx-props-no-spreading': 'off',
        // This rule is not compatible with Next.js's <Link /> components
        'jsx-a11y/anchor-is-valid': 'off',
        // Why would you want unused vars?
        '@typescript-eslint/no-unused-vars': ['error'],
        // require return types on functions only where useful
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
        // Includes .prettierrc.js rules
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      },
    },
  ],
};
