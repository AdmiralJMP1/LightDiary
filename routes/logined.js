module.exports = function(req, res) {
  // console.log(req.user.username);
   if(req.user)
    res.send(username: req.user.username + ' from log');
  else
    res.send('unlogined from log');
};