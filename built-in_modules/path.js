const path = require('path')
console.log(path.sep)

const filePath = path.join('/main', 'submain', 'submaintest.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'main', 'submain', 'submaintest.txt')
console.log(absolute)