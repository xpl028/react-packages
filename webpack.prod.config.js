const { resolve } = require('path');

module.exports = {
  entry: {
    'html-dish': resolve(__dirname, './packages/html-dish/index.js'),
    'text-button': resolve(__dirname, './packages/text-button/index.js'),
  },
  mode: 'production',
};
