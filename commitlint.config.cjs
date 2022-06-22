/** @see: https://cz-git.qbenben.com/config/ */

const fs = require('fs')
const path = require('path')
const packages = fs.readdirSync(path.resolve(__dirname, 'packages'))

/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    scopes: [...packages],
    customScopesAlign: 'top',
  }
};