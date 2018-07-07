// var express = require('express');
import express from 'express';
var app = express();
var middleware = require('./middleware')(app, express);
var config = require("./config")();

app.listen(process.env.PORT || config.PORT, function(){
    console.log('Express server listening');
});