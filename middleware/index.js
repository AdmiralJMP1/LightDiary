module.exports = function (app, express) {
  var router = require('../routes');
  var session = require('express-session');
  var passport = require('passport');
  var strategy = require('./strategy')();

  // sessions
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: 60*60*24*2
  }));

  // passport
  app.use(passport.initialize());
  app.use(passport.session());

  // router
  router(app);
};