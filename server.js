var express = require('express');
var app = express();
var middleware = require('./middleware')(app, express);
var config = require('./server_config');

app.listen(process.env.PORT, function(){
    console.log('Express server listening');
});