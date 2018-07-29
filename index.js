const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log('access token: ', accessToken);
        console.log('refresh token: ', refreshToken);
        console.log('profile: ', profile);
    })
);

//clientID 711594909932-qm2o600h2l5tc0vm0ivj0k2taemqq8ur.apps.googleusercontent.com
//clientSecret xz7BzKAZJ5ReOJJYmFPgTuNT

app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

app.get('/auth/google/callback', passport.authenticate('google'));

app.get('/', (req, res) => {
    res.send({howsLife: 'yez'});
})

const PORT = process.env.PORT || 5000;

app.listen(PORT);