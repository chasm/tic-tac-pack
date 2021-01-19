module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    project: 'tsconfig.eslint.json',
  },
  overrides: [
    {
      files: ['src/**/*.test.js'],
      env: { node: true },
    },
  ],
  plugins: ['react', '@typescript-eslint', 'sonarjs', 'prettier'],
  rules: {
    'prefer-const': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
