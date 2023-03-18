const { resolve } = require("path");
const fs = require("fs");

const __SCOPE_CACHE_PATH = resolve(__dirname, "./.git/scope-cache.json");

const setCacheScope = (scope) => {
  if (!scope) return;
  if (!fs.existsSync(__SCOPE_CACHE_PATH)) {
    fs.writeFileSync(
      __SCOPE_CACHE_PATH,
      JSON.stringify([scope], null, 2),
      "utf8"
    );
  } else {
    const tmp = new Set(
      JSON.parse(fs.readFileSync(__SCOPE_CACHE_PATH, "utf8"))
    );
    tmp.add(scope);
    fs.writeFileSync(
      __SCOPE_CACHE_PATH,
      JSON.stringify([...tmp], null, 2),
      "utf8"
    );
  }
};

const getCacheScope = () => {
  if (!fs.existsSync(__SCOPE_CACHE_PATH)) {
    return [];
  } else {
    return JSON.parse(fs.readFileSync(__SCOPE_CACHE_PATH, "utf8"));
  }
};

/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {},
  prompt: {
    scopes: [...new Set([
      "hello", 
      "world", 
      ...getCacheScope()
    ])],
    // @see: https://github.com/Zhengqbbb/cz-git#options
    formatMessageCB: ({ defaultMessage, scope }) => {
      setCacheScope(scope.replaceAll(/\x1B\[[0-9;]*[mG]/g, ""));
      return defaultMessage;
    },
  },
};
