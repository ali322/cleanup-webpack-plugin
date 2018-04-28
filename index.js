const del = require('del')

class CleanupPlugin {
  constructor(options) {
    options.include = options.include || []
    options.exclude = options.exclude || []
    options.when = ['before', 'after'].includes(options.when)
      ? options.when
      : 'before'
    this.options = options
  }
  apply(compiler) {
    const options = this.options
    const includes = options.include
    const excludes = options.exclude
    const when = options.when
    const patterns = includes.length > 0 ? includes : excludes
    const before = (compiler, cb = () => {}) => {
      del.sync(patterns)
      cb()
    }
    const after = () => {
      del.sync(patterns)
    }
    if (compiler.hooks) {
      when === 'before'
        ? compiler.hooks.beforeRun.tap('CleanupPlugin', before)
        : compiler.hooks.done.tap('CleanupPlugin', after)
    } else {
      when === 'before'
        ? compiler.plugin('before-run', before)
        : compiler.plugin('done', after)
    }
  }
}

module.exports = CleanupPlugin
