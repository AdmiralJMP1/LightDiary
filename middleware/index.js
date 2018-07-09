import session from 'express-session';
import passport from 'passport';
import initialiseRouter from '../routes';
import setStrategy from './strategy';

function initialisePug(app) {
  app.set('view engine', 'pug');
  app.set('views', './views');
}

function initialiseSessions(app) {
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: 60 * 60 * 24 * 2,
  }));
}

function initialisePassport(app) {
  app.use(passport.initialize());
  app.use(passport.session());
}

function initialiseStatic(app, express) {
  app.use(express.static('static'));
  app.use('/static', express.static('static'));
}

function middleware(app, express) {
  setStrategy();
  initialisePug(app);
  initialiseSessions(app);
  initialisePassport(app);
  initialiseRouter(app);
  initialiseStatic(app, express);
}

export default middleware;
