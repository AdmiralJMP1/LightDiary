import { Strategy as GitHubStrategy } from 'passport-github';
import passport from 'passport';
import User from '../model/users';
import GithubUsers from '../model/github_users';

function setStrategy() {
  console.log(process.env.DATABASE_HOST);
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({
      where: { id },
    }).then((foundUser) => {
      done(null, foundUser);
    });
  });

  passport.use(new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `${process.env.DOMEN}/callback`,
    },
    (accessToken, refreshToken, profile, done) => {
      process.nextTick(() => {
        GithubUsers.findOne({
          where: {
            github_id: profile.id,
          },
        }).then((githubUser) => {
          if (githubUser) {
            done(null, githubUser);
          } else {
            User.create({
              username: profile.username,
            }).then((newUser) => {
              GithubUsers.create({
                id: newUser.id,
                github_id: profile.id,
                name: profile.username,
                token: accessToken,
              }).then(newGithubUser => done(null, newGithubUser)).catch(err => done(err));
            }).catch(err => done(err));
          }
        }).catch(err => done(err));
      });
    },
  ));
}

export default setStrategy;
