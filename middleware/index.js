var router = require('../routes');
var session = require('express-session');
var passport = require('passport');
var strategy = require('./strategy')();
var config = require('../server_config');

module.exports = function (app, express) {


  // pug
  app.set('view engine', 'pug');
  app.set('views', './views')

  // sessions
  app.use(session({
    secret: process.env.SESSION_SECRET || config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: 60*60*24*2
  }));

  // passport
  app.use(passport.initialize());
  app.use(passport.session());

  // router
  router(app);
  
  // static
  app.use(express.static('static'));
  app.use('/static', express.static('static'));
};