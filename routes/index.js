var main = require('./main');
var logined = require('./logined');
var public_article = require("./public-article"); 
var passport = require('passport');

module.exports = function(app) {
  app.get('/', function(res,req){
    req.send('in alive');
  });
  app.get('/logined', logined);
  app.get('/public-article', public_article);

  app.get('/login', function(req,res, next){
    req.session.redirectTo = req.header('Referer');
    next();
    },
    passport.authenticate('github')
  );
  app.get('/callback', 
    passport.authenticate('github', { failureRedirect: '/login_pls'}),
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