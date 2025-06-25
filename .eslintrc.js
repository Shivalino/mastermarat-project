module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
    worker: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
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
    'fetch': 'readonly'
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
    'no-implied-eval': 'error',
    'no-script-url': 'error'
  },
  overrides: [
    {
      // Специальные правила для Cloudflare Workers
      files: ['src/worker.js'],
      rules: {
        'no-undef': 'off' // Отключаем для Workers globals
      }
    },
    {
      // Правила для тестов
      files: ['scripts/test-*.js', '**/*.test.js'],
      rules: {
        'no-console': 'off'
      }
    }
  ]
};