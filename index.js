var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var producer = {};
var  {connect} = require('./config/database');
var  {connect_new} = require('./config/database_new');
// connect().then(res=>console.log("CMS connected sucessfully")).catch(err=>{
//   console.log(err);
//   connect();
// });

// connect_new().then(res=>console.log("RMQ connected sucessfully")).catch(err=>{
//   console.log(err);
//   connect();
// });

app.use(logger('dev'));
var constants = require('./config/constants')

app.use(bodyParser.json());


// app.all('/*', function(req, res, next) {
//   // CORS headers
//   res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   // Set custom headers for CORS
//   res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
//   if (req.method == 'OPTIONS') {
//     res.status(200).end();
//   } else {
//     next();
//   }
// });
 
// Only the requests that start with /api/v1/* will be checked for the token.
// Any URL's that do not follow the below pattern should be avoided unless you 
// are sure that authentication is not needed
//app.all('/api/v1/*', [require('./middlewares/validateRequest')]);
//app.all(process.env.NODE_ENV==='development'?'/dev/auth/*':'/auth/*', [require('./middlewares/validateRequest')]); 
app.use( process.env.NODE_ENV==='development'?'/dev/':'/', require('./routes'));
app.get('/favicon.ico', function(req, res) {
  res.status(204);
});
// If no route is matched by now, it must be a 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  console.log(req.url);
  res.status(404).send("Sorry can't find that!")
  
});
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
// Start the server
function encode(doc) {  
  return new Buffer(JSON.stringify(doc));
}
app.set('port', process.env.PORT || 6002);
 
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
