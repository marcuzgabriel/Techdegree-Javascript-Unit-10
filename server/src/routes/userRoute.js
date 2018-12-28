'use strict';

const express = require("express");
const userRoute = express.Router();
const Users = require("../../models/models").Users;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
require('../../config/passport');
const auth = require("basic-auth"); // Auth is for testing... You should be able to set your on authentication in a real life environment.

/* Documentation: 
https://www.youtube.com/watch?v=iX8UhDOmkPE - learn how to use passport, express and session
The basic-auth module is only useful for a testing enviroment. It cant be used in a real life app for
login. */

/* For testing in Postman: 

1) Start with creating a user:
Creating a user route POST /api/users
{
	  "firstName": "Marcuz",
    "lastName": "Larsen",
    "emailAddress": "ml@travelasone.com",
    "password": "your_password"
}

2) Login
Login /api/users/login
{
  "username": "your_email",
  "password": "your_password"
}

3) Have fun with creating, updating and deleting courses.

4) Logout /api/users/logout 

*/


// Define a user by its ID and store it as a variable
userRoute.param("uID", (req, res, next, id) => {
  Users.findById(id, (err, user) => {
    if(err) {
      err = new Error("User is not found.");
      err.status = 404;
      return next(err);
    } else {
    req.user = user;
    return next();
    }
  });
});

// A welcoming message if you are located on /api/users
userRoute.get("/", (req, res, next) => {
  if (res.locals.user) {
    res.status(200);
    res.json(res.locals.user);
    console.log("Succesfully logged in!");
  } else {
    res.json("No authentication... Please login by going to the POST route /api/users/login . It might be a good idea to create a user you can login with by going to the POST route /api/users . For further information on how to login please see the documentation in the userRoute.js file");
  }
});

// POST route - create user
userRoute.post("/", (req, res, next) => {
 
  // Check if email is taken through a static mongoose method
  passport.authenticate('local-signup', (err, user, info) => {
    if (err) { return next(err); }
  
    if (!user) {
      const err = new Error("Email is taken.")
      err.status = 409;
      return next(err);
    } else {
      // Establish a login session.
      req.logIn(user, (err) => {
        if (err) { return next(err); }
        res.status(201).json({
          status: 201,
          message: "User creation successful!"
        })
      });
    }
  })(req, res, next);
});


// Logout and delete cookies
userRoute.get('/logout', (req, res, next) => {
  req.logout();
  res.clearCookie('connect.sid');
  res.redirect('/');
});

// Auth
userRoute.get('/auth', (req, res, next) => {
  res.json(res.locals.user);
});


// Login
userRoute.post('/login', (req, res, next) => {
  passport.authenticate('local-login', (err, user, info) => {
    if (err) { return next(err); }
  
    if (!user) {
      err = info;
      err.status = 404;
      return next(err);
    } else {
      req.logIn(user, (err) => {
        if (err) { return next(err); }
        res.status(200);
        res.location("/");
        res.end();
      });
    }
  })(req, res, next);
});

// Get a specific user
userRoute.get("/:uID", (req, res, next) => {
  res.json(req.user);
});



module.exports = userRoute;