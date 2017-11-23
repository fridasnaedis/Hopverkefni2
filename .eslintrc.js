module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  env: {
    browser: true,
  },
  rules: {
    'class-methods-use-this': 0,
    'no-undef': 0,
    'no-unused-vars': 0
  }
};
