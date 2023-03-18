# cz-git cache `custom-scope` demo

From https://github.com/Zhengqbbb/cz-git/discussions/104
See: ./commitlint.config.cjs

## write cache
1. If u use scope. will set your current scope to `./.git/scope-cache.json` <br>by `formatMessageCB` callbackFn

## read cache
2. If u rerun cz-git. will read from `./.git/scope-cache.json` and merge your setting scope to show
