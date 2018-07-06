var config = require('../server_config');

module.exports = function() {
  var GitHubStrategy = require('passport-github').Strategy;
  var passport = require('passport');

  var User = require('../model/users');
  var Github_users = require('../model/github_users');

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findOne({
      where: {id: id}
    }).then(foundUser => {
      done(null, foundUser);
    });
  });

  passport.use(new GitHubStrategy({
      clientID: process.env.GITHUB_CLIENT_ID || config.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET || config.GITHUB_CLIENT_SECRET,
      callbackURL: 'http://light-diary.herokuapp.com/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function() {
        Github_users.findOne({
          where: {
            github_id: profile.id
          }
        }).then(github_user => {
          if (github_user) {
            return done(null, github_user);
          } else {
            User.create({ 
              username: profile.username
            }).then(newUser => {
              Github_users.create({
                id: newUser.id,
                github_id: profile.id,
                name: profile.username,
                token: accessToken
              })
            }).then(newGithubUser => {
              return done(null, newGithubUser);
            })
          }
        }).catch(err => {
          return done(err)
        });
      });
    }
  ));
};