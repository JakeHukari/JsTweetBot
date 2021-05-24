var Twit = require('twit')

var T = new Twit({
  consumer_key:         'XXXX',
  consumer_secret:      'XXXX',
  access_token:         'XXXX',
  access_token_secret:  'XXXX',
  timeout_ms:           60*1000,
  strictSSL:            true,
})

T.post('statuses/update', { status: (random) }, function(err, data, response) {
  console.log(data)
  console.log(random)
})