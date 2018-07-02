module.exports = function() {
  var GitHubStrategy = require('passport-github').Strategy;
  var passport = require('passport');

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  passport.use(new GitHubStrategy({
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: 'http://light-diary.herokuapp.com/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  ));
};