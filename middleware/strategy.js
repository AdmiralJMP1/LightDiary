import { Strategy as GitHubStrategy } from 'passport-github';
import passport from 'passport';
import User from '../model/users';
import GithubUsers from '../model/github_users';

const strategy = async (accessToken, refreshToken, profile, done) => {
  try {
    const githubUser = await GithubUsers.findOne({
      where: {
        githubID: profile.id,
      },
    });
    if (githubUser) {
      return done(null, githubUser);
    }

    const newUser = await User.create({
      username: profile.username,
    });
    const newGithubUser = await GithubUsers.create({
      id: newUser.id,
      githubID: profile.id,
      name: profile.username,
      token: accessToken,
    });

    return done(null, newGithubUser);
  } catch (err) {
    return done(err);
  }
};

const deserialize = async (id, done) => {
  try {
    const foundUser = await User.findOne({
      where: { id },
    });
    if (foundUser) {
      done(null, foundUser);
    } else {
      throw new Error('Not Found User on Deserialize');
    }
  } catch (err) {
    done(err);
  }
};

function setStrategy() {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => (
    deserialize(id, done)
  ));

  passport.use(new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => (
      strategy(accessToken, refreshToken, profile, done)
    ),
  ));
}

export default setStrategy;
