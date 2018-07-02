module.exports = function(req, res) {
   if(req.user)
    res.send(username: req.user.username + ' from main');
  else
    res.send('unlogined from main');
};