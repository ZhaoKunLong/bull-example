module.exports = {
  env: {
    node: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'nestjs'
  ],
  extends: [
    'plugin:nestjs/recommended',
  ],
  rules: {
  },
};
