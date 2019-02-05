const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url)
    const path = parsedUrl.pathname.replace(/^\/+|\/+$/g, '')

    req.on('data', () => {})

    req.on('end', () => {
        res.setHeader('Content-Type', 'application/json')
        if (path === 'hello') {
            res.writeHead(200)
            res.end(JSON.stringify({ message: 'Hello World!' }))
        } else {
            res.writeHead(404)
            res.end(JSON.stringify({ error: 'not found' }))
        }
    })
})

const port = 3000
server.listen(port, () => {
    console.log(`The server is running on port: ${port}`)
})
