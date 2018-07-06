var express = require('express');
var app = express();
var middleware = require('./middleware')(app, express);
try {
  var config = require('./server_config');
    // do stuff
} catch (ex) {
  var config = {
  DATABASE_HOST: null,
  DATABASE_NAME: null,
  DATABASE_PASSWORD: null,
  DATABASE_URL: null,
  DATABASE_USER: null,
  GITHUB_CLIENT_ID: null,
  GITHUB_CLIENT_SECRET: null,
  SESSION_SECRET: null,
  PORT: null
}
}

app.listen(process.env.PORT || config.PORT, function(){
    console.log('Express server listening');
});