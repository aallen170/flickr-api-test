var Flickr = require('flickr-sdk');

var oauth = new Flickr.OAuth(
  '44f0f3e9f1bc34456bcf2b6df8499796',
  '6dd19e9e3bcfd112'
);

let token, tokenSecret;

async function testRequest(responseFunc, errorFunc) {
  oauth.request('http://localhost:3000/oauth/callback')
  .then(responseFunc)
  .catch(errorFunc);
}

oauth.request('http://localhost:3000/oauth/callback').then(function (res) {
  console.log('yay!', res);
  console.log('oauth token:', res.body.oauth_token);
  console.log('oauth token secret:', res.body.oauth_token_secret);

  token = res.body.oauth_token;
  tokenSecret = res.body.oauth_token_secret;
}).catch(function (err) {
  console.error('bonk', err);
});

console.log('token after call:', token);
console.log('token secret after call:', tokenSecret);

// var flickr = new Flickr(Flickr.OAuth.createPlugin(
//   oauth.consumerKey,
//   oauth.consumerSecret,
//   process.env.FLICKR_OAUTH_TOKEN,
//   process.env.FLICKR_OAUTH_TOKEN_SECRET
// ));

// flickr.test.login().then(function (res) {
//   console.log('yay!', res.body);
// }).catch(function (err) {
//   console.error('bonk', err);
// });