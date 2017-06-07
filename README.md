# test-listen-destroy

Uses [test-listen](https://npm.im/test-listen) but destroys http server when request is done.

This allows a single assertion per call.

[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![downloads](https://img.shields.io/npm/dm/test-listen-destroy.svg)](https://npmjs.org/package/test-listen-destroy)
[![Greenkeeper badge](https://badges.greenkeeper.io/JamesKyburz/test-listen-destroy.svg)](https://greenkeeper.io/)

# example

```javascript
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
```

# license

[Apache License, Version 2.0](LICENSE)

