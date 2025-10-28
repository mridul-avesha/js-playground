const http = require('http')
const fs = require('fs')
const path = require('path')

const PUBLIC_DIR = path.join(__dirname, 'public')
const PORT = process.env.PORT || 3000

function contentType(file) {
  const ext = path.extname(file).toLowerCase()
  switch (ext) {
    case '.html': return 'text/html; charset=utf-8'
    case '.css': return 'text/css; charset=utf-8'
    case '.js': return 'application/javascript; charset=utf-8'
    case '.json': return 'application/json; charset=utf-8'
    case '.png': return 'image/png'
    case '.jpg':
    case '.jpeg': return 'image/jpeg'
    default: return 'application/octet-stream'
  }
}

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split('?')[0])
  if (reqPath === '/') reqPath = '/index.html'
  const filePath = path.join(PUBLIC_DIR, reqPath)

  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403)
    return res.end('Forbidden')
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'})
      return res.end('Not found')
    }
    res.writeHead(200, {'Content-Type': contentType(filePath)})
    fs.createReadStream(filePath).pipe(res)
  })
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})