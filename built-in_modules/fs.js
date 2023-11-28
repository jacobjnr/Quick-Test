const { readFileSync, writeFileSync } = require('fs')
const path = require('path')

const basePath = path.join(__dirname, 'olorunleke/node/built-in_modules')

const firstFilePath = path.join(basePath, 'one.txt')
const secondFilePath = path.join(basePath, 'two.txt')

const first = readFileSync(firstFilePath, 'utf8')
const second = readFileSync(secondFilePath, 'utf8')

console.log(first, second);