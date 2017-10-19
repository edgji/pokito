const fs = require('fs')
const dotenv = require('dotenv')

module.exports = {
  env: fs.existsSync('.env') ? dotenv.parse(fs.readFileSync('.env', 'utf8')) : {}
}
