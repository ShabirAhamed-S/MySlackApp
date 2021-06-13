require('dotenv/config')
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    callbackURL: process.env.CALLBACKURL
  },
  function(accessToken, refreshToken, profile, cb) {
    // Register user here.
    console.log(profile);
    cb(null, profile);
  }
));

// // Testing purpose
// passport.use(new GoogleStrategy({
//   clientID: '589745376526-pih6m9s0qo3ifau0qot55pq415cb06ng.apps.googleusercontent.com',
//   clientSecret: 'thRRJXnl7U6RcNREwCLQ6dqk',
//   callbackURL: 'http://localhost:5000/auth/google/callback'
// },
//   function (accessToken, refreshToken, profile, done) {
//       // if user already exist in your dataabse login otherwise
//       // save data and signup
//       done(null, {});
//   }
// ));