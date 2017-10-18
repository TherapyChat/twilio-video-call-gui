const fs = require('fs')
const path = require('path')
const pkgInfo = require('../package.json')

const changelog = path.join(__dirname, '../CHANGELOG.md')

fs.readFile(changelog, 'utf8', function (err, data) {
  if (err) return console.err(err)

  const version = 'v' + pkgInfo.version
  const date = new Date().toISOString().replace(/T.*/, '')

  const result = data.replace(/(\n+)(?!<!--)(\n)(## )(\[UNRELEASED])/g, '$1$2$3' + version + ' - ' + date)

  fs.writeFile(changelog, result, 'utf8', function (err) {
    if (err) return console.err(err)
  })
})
