function main(req, res) {
  if (req.user) {
    res.render('index', { username: req.user.username });
  } else {
    res.render('index');
  }
}

export default main;
