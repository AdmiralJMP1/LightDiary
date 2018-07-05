var main = require('./main');
var application_page = require('./application_page');
var passport = require('passport');

module.exports = function(app) {
  app.get('/', main);
  app.get('/app', application_page);

  app.get('/login', function(req,res, next){
    req.session.redirectTo = req.header('Referer');
    next();
    },
    passport.authenticate('github')
  );
  app.get('/callback', 
    passport.authenticate('github', { failureRedirect: '/'}),
    function(req, res) {
      if(req.session.redirectTo){
        res.redirect(req.session.redirectTo);   
      }
      else
        res.redirect('/logined')
  });
  
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect(req.header('Referer'));
  });
};