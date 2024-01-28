const path = require('path')

module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  settings: {
    react: {
      // Nói eslint-plugin-react tự động biết version của React.
      version: 'detect'
    },
    // Nói ESLint cách xử lý các import
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, '')],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // Tắt rule yêu cầu import React trong file jsx
    'react/react-in-jsx-scope': 'warn',
    // Cảnh báo khi thẻ <a target='_blank'> mà không có rel="noreferrer"
    // 'react/jsx-no-target-blank': 'warn',
    // Tăng cường một số rule prettier (copy từ file .prettierrc qua)

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',

    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true
      }
    ]
  }
}
