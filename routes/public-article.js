module.exports = function(req, res) {
   if(req.user)
    res.send(username: req.user.username + ' from art');
  else
    res.send('unlogined from art');
};