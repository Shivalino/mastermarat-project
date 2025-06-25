// eslint.config.js - ESLint v9 configuration
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['workers/**/*.js', 'scripts/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Cloudflare Workers globals
        'addEventListener': 'readonly',
        'Response': 'readonly',
        'Request': 'readonly',
        'URL': 'readonly',
        'URLSearchParams': 'readonly',
        'Headers': 'readonly',
        'FormData': 'readonly',
        'btoa': 'readonly',
        'atob': 'readonly',
        'crypto': 'readonly',
        'caches': 'readonly',
        'fetch': 'readonly',
        'console': 'readonly',
        'Date': 'readonly',
        'JSON': 'readonly',
        'parseInt': 'readonly',
        'process': 'readonly'
      }
    },
    rules: {
      // Code quality
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      'no-console': 'off', // Разрешаем console.log в Workers
      'prefer-const': 'error',
      'no-var': 'error',
      
      // Code style
      'indent': ['error', 2],
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      
      // Best practices
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'dot-notation': 'error',
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { 'max': 2 }],
      'eol-last': ['error', 'always'],
      
      // Security
      'no-eval': 'error',
      'no-implied-eval': 'error'
    }
  },
  {
    // Специальные правила для тестов
    files: ['scripts/test-*.js', '**/*.test.js'],
    rules: {
      'no-console': 'off'
    }
  }
];