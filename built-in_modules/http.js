const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('here is our short history')
    }
    res.end(`
    <h1>Ooops!</h1>
    <p>We can't seem to find this page</p>
    <a href="/">Back home</a>
    `)
})

server.listen(8000)