const listen = require('./')
const test = require('tape')
const request = require('request-promise')

test('server', async (t) => {
  t.plan(1)
  const fn = (req, res) => res.end('hello')
  const url = await listen(fn)
  const res = await request(url)
  t.deepEqual(res, 'hello', 'server returns hello')
})
