# guld-git-path

[![source](https://img.shields.io/badge/source-bitbucket-blue.svg)](https://bitbucket.org/guld/tech-js-node_modules-guld-git-path) [![issues](https://img.shields.io/badge/issues-bitbucket-yellow.svg)](https://bitbucket.org/guld/tech-js-node_modules-guld-git-path/issues) [![documentation](https://img.shields.io/badge/docs-guld.tech-green.svg)](https://guld.tech/lib/guld-git-path.html)

[![node package manager](https://img.shields.io/npm/v/guld-git-path.svg)](https://www.npmjs.com/package/guld-git-path) [![travis-ci](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-git-path.svg)](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-git-path?branch=guld) [![lgtm](https://img.shields.io/lgtm/grade/javascript/b/guld/tech-js-node_modules-guld-git-path.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/b/guld/tech-js-node_modules-guld-git-path/context:javascript) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-guld-git-path/status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-guld-git-path) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-guld-git-path/dev-status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-guld-git-path?type=dev)

Guld tool for getting the git directory of a path, or converting local paths into git-friendly repo names.

### Install

##### Node

```sh
npm i guld-git-path
```

### Usage

```
// async
getGitDir().then(console.log)
```

##### Example Output

```
/home/isysd/tech/js/node_modules/guld-git-path/.git
```

##### Node

```
const { getGitDir, pathEscape } = require('guld-git-path')
```

### License

MIT Copyright isysd
