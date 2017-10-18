const path = require('path')
module.exports = {
  extendWebpack(config) {
    config.resolve
      .alias
        .set('package', path.resolve(__dirname, './package.json'))
  }
}
