import passport from 'passport';
import { Strategy } from 'passport-local';
import md5 from 'md5';
import models from '../models';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await models.users.findOne({
      where: { id },
      raw: true,
    });
    done(null, user);
  } catch (error) {
    done(error);
  }
});

passport.use(
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    (email, password, done) => {
      models.users
        .findOne({
          where: {
            $and: [{ email }, { password: md5(password) }],
          },
          raw: true,
        })
        .then(user => {
          if (user) {
            done(null, user);
          } else {
            done(null, false);
          }
        })
        .catch(err => done(err));
    }
  )
);

export default passport;
