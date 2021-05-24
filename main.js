const Twit = require('twit')
const notifier = require('node-notifier');
const open = require('open');
const franc = require('franc')

CONSUMER_KEY ="hzGQU7JazJT19Y79d2DrfnTJV"
CONSUMER_SECRET = "lAQlNXoaxyEequZHnitroGSyjOSlAxB6pc76qlIHyLMn1MTJTF"   
ACCESS_KEY = "1161775799596388352-f1e26ZYaJiL5XX7mX31l3t3VIggMPq"    
ACCESS_SECRET = "ii8UUZ6wuUOgKd5NfMccvDDmzRO4sf41J53f3xq2eGiaH"

var T = new Twit({
  consumer_key:     CONSUMER_KEY,
  consumer_secret:  CONSUMER_SECRET,
  access_key:       ACCESS_KEY,
  access_secret:    ACCESS_SECRET,
}); 

T.post('statuses/update', { status: 'Twit Test' }, function(err, data, response) {
    console.log(data)