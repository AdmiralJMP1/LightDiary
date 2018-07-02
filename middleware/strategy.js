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
      clientID: 'e4b0933bfe7d85a58ffc',
      clientSecret: '015e95072f02b4d177b57554dc7c8e1736b518be',
      callbackURL: 'http://light-diary.herokuapp.com/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  ));
};