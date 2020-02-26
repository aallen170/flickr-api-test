const md5 = require('md5');

// var OAuth = require('@zalando/oauth2-client-js');
// var flickr = new OAuth.Provider({
//     id: 'flickr',   // required
//     authorization_url: 'https://www.flickr.com/services/oauth/authorize' // required
// });

// var request = new OAuth.Request({
//   client_id: 'my_client_id',  // required
//   redirect_uri: 'http://my.server.com/auth-answer'
// });

// let base = "https://www.flickr.com/services/rest/?",
//     method = "flickr.photosets.getPhotos",
//     apiKey = "805de480ea150a85299706b483e264c3",
//     photosetId = "72157709602266392",
//     userId = "169125858@N03",
//     format = "rest",
//     secret = "9427c1394e62c7f2",
//     authToken = "72157711188553512-2834d342f3f172b2";

// // let api_sig = md5($secret . "api_key" . $api_key . "auth_token" . $auth_token . "formatjsonmethodflickr.photosets.getPhotosphotoset_id" . $photoset_id );

let secret = "9427c1394e62c7f2";
let apiKey = "aa26e8a5c644dc1f464a0b7f3f516b3e";
let authToken = "72157711188553512-2834d342f3f172b2";
let photosetId = "72157709602266392";

// let apiSig = md5(
//   `${secret}api_key${apiKey}auth_token${authToken}formatjsonmethodflickr.photosets.getPhotosphotoset_id${photosetId}`
// );

let apiSig = md5(
  `${secret}api_key${apiKey}auth_token${authToken}formatjsonmethodflickr.photosets.getFrob`
);

console.log(apiSig);

// console.log(`${base}method=${method}&api_key=${apiKey}`);

// let testCall = "https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=aa26e8a5c644dc1f464a0b7f3f516b3e&photoset_id=72157709602266392&user_id=169125858%40N03&format=rest&auth_token=72157711188553512-2834d342f3f172b2&api_sig=75f418db7865bcd524f175a5b822a2c9";

// GetCall(testCall, ShowResponse);

// console.log(md5(`${secret}api_key${apiKey}`));