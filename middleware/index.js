import session from 'express-session';
import passport from 'passport';
import initializeRouter from '../routes';
import setStrategy from './strategy';

function initializePug(app) {
  app.set('view engine', 'pug');
  app.set('views', './views');
}

function initializeSessions(app) {
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: 60 * 60 * 24 * 2,
  }));
}

function initializePassport(app) {
  app.use(passport.initialize());
  app.use(passport.session());
}

function initializeStatic(app, express) {
  app.use(express.static('static'));
  app.use('/static', express.static('static'));
}

function middleware(app, express) {
  setStrategy();
  initializePug(app);
  initializeSessions(app);
  initializePassport(app);
  initializeRouter(app);
  initializeStatic(app, express);
}

export default middleware;
