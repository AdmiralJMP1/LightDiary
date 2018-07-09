import { Strategy as GitHubStrategy } from 'passport-github';
import passport from 'passport';
import User from '../model/users';
import GithubUsers from '../model/github_users';

const strategy = async (accessToken, refreshToken, profile, done) => {
  try {
    const githubUser = await GithubUsers.findOne({
      where: {
        github_id: profile.id,
      },
    });

    if (githubUser) {
      done(null, githubUser);
    } else {
      const newUser = await User.create({
        username: profile.username,
      });
      if (newUser) {
        const newGithubUser = await GithubUsers.create({
          id: newUser.id,
          github_id: profile.id,
          name: profile.username,
          token: accessToken,
        });

        if (newGithubUser) {
          done(null, newGithubUser);
        }
      }
    }
  } catch (err) {
    done(err);
  }
};

function setStrategy() {
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
    async (accessToken, refreshToken, profile, done) => (
      strategy(accessToken, refreshToken, profile, done)
    ),
  ));
}

export default setStrategy;
