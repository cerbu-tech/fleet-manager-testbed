const http = require('node:http')

const server = http.createServer((req, res) => {
  if (req.url === '/ping') {
    res.end('pong')
    return
  }
  res.end('ok')
})

server.listen(3000)
// direct push probe
// direct push probe 2
