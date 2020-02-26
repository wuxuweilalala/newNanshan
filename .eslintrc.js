module.exports = {
  env: {
    browser: true,
    node: true,
    amd: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    export:'readonly'
  },

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  plugins: ['vue'],
  rules: {
    'no-console': 0,
    'no-unused-vars': 0,
    'no-debugger': 1,
    'vue/no-unused-components':1
  }
}
