const { readFile, writeFile } = require('fs')

readFile('./main/one.txt', 'utf8', (err, result) => {
    if(err) [
        console.log(err)
    ]
    console.log(result)
})