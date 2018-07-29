const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

//clientID 711594909932-qm2o600h2l5tc0vm0ivj0k2taemqq8ur.apps.googleusercontent.com
//clientSecret xz7BzKAZJ5ReOJJYmFPgTuNT

app.get('/', (req, res) => {
    res.send({howsLife: 'yez'});
})

const PORT = process.env.PORT || 5000;

app.listen(PORT);