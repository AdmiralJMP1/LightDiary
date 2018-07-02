var express = require('express');
var app = express();
// var middleware = require('./middleware')(app, express);

app.listen(8080, function(){
    console.log('Express server listening');
});