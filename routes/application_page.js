function applicationPage(req, res) {
  if (req.user) {
    res.render('application_page', { username: req.user.username });
  } else {
    res.render('application_page');
  }
}

export default applicationPage;
