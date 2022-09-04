module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'next/core-web-vitals', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  overrides: [],
  // parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    // 'prettier/prettier': 0,
    'import/order': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/function-component-definition': 0,
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.ts', '.jsx', '.tsx']
    }],
    'comma-dangle': ['error', 'always-multiline']
  }
};