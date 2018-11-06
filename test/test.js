/* eslint-env node, mocha */
const path = require('path')
const home = require('user-home')
const assert = require('chai').assert
const { getGitDir, pathTree, pathEscape } = require('../index.js')

describe('getGitDir', function () {
  it('cwd', async function () {
    assert.isTrue((await getGitDir()).endsWith('guld-git-path/.git'))
  })
  it('absolute path', async function () {
    assert.isTrue((await getGitDir(path.resolve('./node_modules'))).endsWith('guld-git-path/.git'))
  })
  it('relative path', async function () {
    assert.isTrue((await getGitDir('./node_modules')).endsWith('guld-git-path/.git'))
  })
})

describe('pathTree', function () {
  it('cwd', async function () {
    assert.equal((await pathTree()), 'tech/js/node_modules/guld-git-path')
  })
  it('absolute path', async function () {
    assert.equal((await pathTree(path.join(home, '/tech/js/node_modules/guld-git-path'))), 'tech/js/node_modules/guld-git-path')
  })
  it('relative path', async function () {
    assert.equal((await pathTree('./test')), 'tech/js/node_modules/guld-git-path/test')
  })
})

describe('pathEscape', function () {
  it('cwd', async function () {
    assert.equal((await pathEscape()), 'tech-js-node_modules-guld-git-path')
  })
  it('absolute path', async function () {
    assert.equal((await pathEscape(path.join(home, '/tech/js/node_modules/guld-git-path'))), 'tech-js-node_modules-guld-git-path')
  })
  it('relative path', async function () {
    assert.equal((await pathEscape('./test')), 'tech-js-node_modules-guld-git-path-test')
  })
})
