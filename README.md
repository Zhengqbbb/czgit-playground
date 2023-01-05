# czg playground - yarn v3

> yarn v3 does not use node_modules. The mechanism causing commitizen CLI cannot be used. <br>
> Commitizen CLI the first step of its default behavior is to find the node_modules adapter.<br>
> 
> But `cz-git + commitizen` alternatives `czg` can be used<br>
> It doesn't need any extra steps, small built-in cz-git, that you can install and use immediately. <br>
> website: https://cz-git.qbb.sh/cli/

## Usage

### 1. Clone the repository and download the dependencies
```bash
git clone -b czg-yarn-v3 https://github.com/Zhengqbbb/czgit-playground.git
cd czgit-playground
yarn add czg --dev
```

### 2. See package script. Try use czg
```bash
git add .
yarn cz
```
