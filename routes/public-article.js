module.exports = function(req, res) {
  if(req.user)
  {
  	res.render('public-article', {username: req.user.username});
  }
  else
  	res.render('public-article');
};