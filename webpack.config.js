const { merge } = require('webpack-merge');
const base = require('./webpack.base.config');

process.env.NODE_ENV = 'development';

let config = require('./webpack.prod.config');

if (process.env.NODE_ENV === 'development') {
  config = require('./webpack.dev.config');
}

module.exports = merge(base, config);
