var Twit = require('twit')

var T = new Twit({
  consumer_key:         'XXXX',
  consumer_secret:      'XXXX',
  access_token:         'XXXX',
  access_token_secret:  'XXXX',
  timeout_ms:           60*1000,
  strictSSL:            true,
})

const random = Math.floor(Math.random() * 99999999999999999);

T.post('statuses/update', { status: 'Random Number: '+(random) }, function(err, data, response) {
  console.log(data)
  console.log('Number Generated: '+random)
})