const path = require('path')
const home = require('user-home')
const { getFS } = require('guld-fs')
var fs

function getDefaultPath () {
  if (typeof process !== 'undefined') return process.cwd()
  else if (typeof __filename !== 'undefined') return __filename
  else throw new Error('No path given or detectable.')
}

async function getGitDir (p) {
  p = p || getDefaultPath()
  p = path.resolve(p)
  if (p.length <= 1) throw new Error('Reached root of filesystem without git dir')
  fs = fs || await getFS()
  var gp = path.join(p, '.git')
  try {
    var dl = await fs.stat(gp)
  } catch (e) {
    if (e.code && (e.code === 'ENOENT' || e.code === 'ENOTDIR')) return getGitDir(path.dirname(p))
    else throw e
  }
  if (dl.isDirectory()) return gp
}

function pathTree (p) {
  p = p || getDefaultPath()
  if (p === '/home') return 'blocktree'
  if (p === home) return 'perspective'
  if (p.startsWith(home)) p = p.slice(home.length + 1)
  else {
    p = path.resolve(p)
    if (p.startsWith(home)) p = p.slice(home.length + 1)
    else throw new RangeError(`path ${p} is not in the blocktree`)
  }
  return p
}

function pathEscape (p) {
  p = pathTree(p)
  if (p.startsWith('.')) p = `_${p.slice(1)}`
  return p.replace(/\//g, '-').toLowerCase()
}

module.exports = {
  getDefaultPath: getDefaultPath,
  getGitDir: getGitDir,
  pathTree: pathTree,
  pathEscape: pathEscape
}
