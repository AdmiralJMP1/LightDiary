module.exports = function(req, res) {
  if(req.user)
    res.render('app', {username: req.user.username});
  else
    res.render('app');
};