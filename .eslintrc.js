module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  ignorePatterns: ["src/index.tsx", "test/**/*"],
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': 0,
    "indent": ["error", 2],
    "semi": ["error","never"],
  //   "import/extensions": [
  //     "error",
  //     "ignorePackages",
  //     {
  //       "js": "never",
  //       "jsx": "never",
  //       "ts": "never",
  //       "tsx": "never"
  //     }
  //  ],
   "import/extensions": ['off'],
   "import/no-unresolved": 0,
   'react-hooks/exhaustive-deps': 0,
   'react/prop-types': 0,
   'no-alert': 0,
   'explicit-module-boundary-types': 0
  },
};
