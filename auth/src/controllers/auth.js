'use strict';

const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const ClientPasswordStrategy = require('passport-oauth2-client-password')
  .Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;

const { Client, Token, User } = require('../models');

/**
 * LocalStrategy
 *
 * This strategy is used to authenticate users based on a username and password.
 * Anytime a request is made to authorize an application, we must ensure that
 * a user is logged in before asking them to approve the request.
 */
passport.use(
  new BasicStrategy((username, password, callback) => {
    User.findOne({ username: username }, function(err, user) {
      if (err) return callback(err);

      // No user found with that username
      if (!user) return callback(null, false);

      // Make sure the password is correct
      if (user.password !== password) return callback(null, false);

      return callback(null, user);
    });
  })
);

passport.serializeUser((user, done) => done(null, user._id));

passport.deserializeUser((id, done) => {
  db.users.findById(id, (error, user) => done(error, user));
});

/**
 * BasicStrategy & ClientPasswordStrategy
 *
 * These strategies are used to authenticate registered OAuth clients. They are
 * employed to protect the `token` endpoint, which consumers use to obtain
 * access tokens. The OAuth 2.0 specification suggests that clients use the
 * HTTP Basic scheme to authenticate. Use of the client password strategy
 * allows clients to send the same credentials in the request body (as opposed
 * to the `Authorization` header). While this approach is not recommended by
 * the specification, in practice it is quite common.
 */
function verifyClient(clientId, clientSecret, callback) {
  Client.findOne({ id: clientId }, function(err, client) {
    if (err) {
      return callback(err);
    }

    // No client found with that id or bad password
    if (!client || client.secret !== clientSecret) {
      return callback(null, false);
    }

    // Success
    return callback(null, client);
  });
}

passport.use('client-basic', new BasicStrategy(verifyClient));

passport.use(new ClientPasswordStrategy(verifyClient));

/**
 * BearerStrategy
 *
 * This strategy is used to authenticate either users or clients based on an access token
 * (aka a bearer token). If a user, they must have previously authorized a client
 * application, which is issued an access token to make requests on behalf of
 * the authorizing user.
 */
passport.use(
  new BearerStrategy((accessToken, callback) => {
    Token.findOne({ value: accessToken }, function(err, token) {
      if (err) return callback(err);

      // No token found
      if (!token) return callback(null, false);

      User.findOne({ _id: token.userId }, function(err, user) {
        if (err) return callback(err);

        // No user found
        if (!user) return callback(null, false);

        // Simple example with no scope
        callback(null, user, { scope: '*' });
      });
    });
  })
);

exports.isAuthenticated = passport.authenticate(['basic', 'bearer'], {
  session: false
});
exports.isClientAuthenticated = passport.authenticate('client-basic', {
  session: false
});
exports.isBearerAuthenticated = passport.authenticate('bearer', {
  session: false
});
