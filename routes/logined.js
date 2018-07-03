module.exports = function(req, res) {
  // console.log(req.user.username);
  if(req.user)
  	res.render('logined', {username: req.user.username});
  else
  	res.render('logined');
};