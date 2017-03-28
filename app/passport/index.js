'use strict';

const passport = require('passport'),
    data = require('./../data');

require('./local-strategy')(passport, data);

module.exports = (app, data) => {
    passport.serializeUser((user, done) => {
        if (user) {
            done(null, user._id);
        }
    });

    passport.deserializeUser((userId, done) => {
        data
            .findById(userId)
            .then(user => done(null, user || false))
            .catch(error => done(error, false));
    });

    app.use(passport.initialize());
    app.use(passport.session());
};