/** @see: https://cz-git.qbenben.com/config/ */
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    scopes: [
      { name: 'site:    website related changes', value: 'site' },
      { name: 'util:    utils related changes', value: 'util' },
      { name: 'config:  configs related changes', value: 'config' },
    ],
    customScopesAlign: 'top',
  }
};