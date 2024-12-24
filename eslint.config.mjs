import js from '@eslint/js';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

// Update type to the new standard type (replace `ESLintConfig` with the correct type if different)
/** @type {import('eslint').Linter.ESLintConfig} */
export default [
  {
    ignores: ['node_modules', 'dist', 'out'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
    },
    rules: {
      ...tsEslintPlugin.configs.recommended.rules,
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {accessibility: 'explicit'},
      ],
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'import',
          format: ['camelCase', 'PascalCase'],
        },
      ],
      curly: 'warn',
      eqeqeq: 'warn',
      'no-throw-literal': 'warn',
      // Ensure a single blank line after the entire import block
      'padding-line-between-statements': [
        'error',
        {blankLine: 'always', prev: 'import', next: '*'},
        {blankLine: 'any', prev: 'import', next: 'import'},
      ],
      // Remove all other empty lines
      'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 0, maxBOF: 0}],
    },
  },
];
