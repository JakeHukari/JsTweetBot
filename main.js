const random = Math.random();
const { randomBytes } = require('tweetnacl')
var Twit = require('twit')

var T = new Twit({
  consumer_key:         'hzGQU7JazJT19Y79d2DrfnTJV',
  consumer_secret:      'lAQlNXoaxyEequZHnitroGSyjOSlAxB6pc76qlIHyLMn1MTJTF',
  access_token:         '1161775799596388352-f1e26ZYaJiL5XX7mX31l3t3VIggMPq',
  access_token_secret:  'ii8UUZ6wuUOgKd5NfMccvDDmzRO4sf41J53f3xq2eGiaH',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

randomBytes.

T.post('statuses/update', { status: 'Twit Test' }, function(err, data, response) {
  console.log(data)
})