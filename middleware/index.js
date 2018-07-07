import session from 'express-session';
import passport from 'passport';
import router from '../routes';
import setStrategy from './strategy';

function middleware(app, express) {
  setStrategy();
  // pug
  app.set('view engine', 'pug');
  app.set('views', './views');

  // sessions
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: 60 * 60 * 24 * 2,
  }));

  // passport
  app.use(passport.initialize());
  app.use(passport.session());

  // router
  router(app);

  // static
  app.use(express.static('static'));
  app.use('/static', express.static('static'));
}

export default middleware;
