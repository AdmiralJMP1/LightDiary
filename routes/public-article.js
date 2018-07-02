module.exports = function(req, res) {
   if(req.user)
    res.send(req.user.username + ' from art');
  else
    res.send('unlogined from art');
};