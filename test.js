/* global describe:false it:false */
const path = require('path')
const assert = require('chai').assert
const { getGitDir } = require('./index.js')

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
