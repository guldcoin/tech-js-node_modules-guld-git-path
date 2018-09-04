# guld-git-path

Guld tool for getting the git directory of a path, or converting local paths into git-friendly repo names.

### Install

```
npm i -g guld-git-path
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

