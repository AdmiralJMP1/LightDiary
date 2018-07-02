module.exports = function(req, res) {
  //  if(req.user)
  //   res.send(req.user.username + ' from main');
  // else
  //   res.send('unlogined from main');
  res.send(process.env.GITHUB_CLIENT_ID)
};