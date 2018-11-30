'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  static_ROOT: '"./static/"',
  API_ROOT:'"http://localhost:7070/openapi/v3"',
})
