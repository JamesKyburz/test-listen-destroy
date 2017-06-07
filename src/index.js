const http = require('http')
const enableDestroy = require('server-destroy')
const listen = require('test-listen')

module.exports = getUrl

function getUrl (server, fn) {
  if (!fn) {
    fn = server
    server = http.createServer()
  }
  enableDestroy(server)
  server.on('request', (req, res) => {
    res.on('finish', () => server.destroy())
    fn(req, res)
  })
  const url = listen(server)
  return url
}
