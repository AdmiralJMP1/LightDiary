import passport from 'passport';
import main from './main';
import applicationPage from './application_page';

function router(app) {
  app.get('/', main);
  app.get('/app', applicationPage);

  app.get('/login',
    (req, res, next) => {
      req.session.redirectTo = req.header('Referer');
      next();
    },
    passport.authenticate('github'));

  app.get('/callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    (req, res) => {
      if (req.session.redirectTo) {
        res.redirect(req.session.redirectTo);
      } else {
        res.redirect('/logined');
      }
    });

  app.get('/logout',
    (req, res) => {
      req.logout();
      res.redirect(req.header('Referer'));
    });
}

export default router;
