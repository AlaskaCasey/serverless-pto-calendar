var gcal = require('google-calendar');
var google = require('googleapis');
var OAuth2Client = google.auth.OAuth2;
var config = require('./config')
console.log('config', config)
var oauth2Client = new OAuth2Client(config.clientID, config.clientSecret);
var accessToken = 'my-token'

var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

/*
oauth2Client.getToken(code, function (err, tokens) {
     if (err) {
       return callback(err);
     }
     // set tokens to the client
     // TODO: tokens should be set by OAuth2 client.
     oauth2Client.setCredentials(tokens);
     //callback();
   });

var googleCalendar = new gcal.GoogleCalendar(accessToken);

console.log(oauth2Client)
console.log("Code started running");

googleCalendar.calendarList.list(function(err, calendarList) {

console.log(err);
  console.log(calendarList)

  // var ptoCalendar = calendarList['pot']
  //
  // ptoCalendar.events.list(calendarId, function(err, calendarList) {
  //
  // });
});
*/
