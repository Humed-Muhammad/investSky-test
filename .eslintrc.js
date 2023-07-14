const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);
module.exports = {
  // Configuration for JavaScript files
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  ignorePatterns: ['**/slice/*.ts'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
  },
  overrides: [
    // Configuration for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: [
        '@typescript-eslint',
        'unused-imports',
        //   "simple-import-sort"
      ],
      extends: ['airbnb-typescript', 'plugin:prettier/recommended'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            endOfLine: 'auto',
          },
        ],
        'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        'react/jsx-filename-extension': 'off',
        '@typescript-eslint/no-shadow': 'warn',
        'no-param-reassign': 'off',
        'no-shadow': 'off',
        'no-nested-ternary': 'warn',
        'no-underscore-dangle': 'off',
        'consistent-return': 'off',
        'import/no-cycle': ['warn'],
        'prefer-destructuring': 'warn',
        'no-plusplus': 'off',
        'global-require': 'off',
        'dot-notation': 'warn',
        'no-restricted-syntax': 'off',
        '@typescript-eslint/dot-notation': 'warn',
        'import/no-mutable-exports': 'off',
        'import/no-extraneous-dependencies': 'warn',
        '@typescript-eslint/naming-convention': 'warn',
        'no-unsafe-optional-chaining': 'warn',
        'react/require-default-props': 'off', // Allow non-defined react props as undefined
        'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator and also, react-hook-form
        'react-hooks/exhaustive-deps': 'off', // Incorrectly report needed dependency with Next.js router
        '@typescript-eslint/comma-dangle': 'off', // Avoid conflict rule between Eslint and Prettier
        'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
        //   "simple-import-sort/imports": "error", // Import configuration for `eslint-plugin-simple-import-sort`
        //   "simple-import-sort/exports": "error", // Export configuration for `eslint-plugin-simple-import-sort`
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      },
    },
  ],
};
