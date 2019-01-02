'use strict';

// load modules
var uuid = require('node-uuid'); // Creates unique ID's
const express = require('express'); // Server
const morgan = require('morgan'); // Error handling
const userRoute = require('./src/routes/userRoute'); // Loading routes
const courseRoute = require('./src/routes/courseRoute'); // Course routes
var bodyParser = require('body-parser'); // Body parser
const mongoose = require("mongoose"); // Database
const cookieParser = require("cookie-parser") // Read cookies and create them
const session = require("express-session"); // Session handleing
const passport = require("passport"); // Auth handling
require('dotenv').config(); // Local environment variables
 
// Configure mongoose
mongoose.connect("mongodb://localhost:27017/td10-restapi");
const db = mongoose.connection;

// Message to the console if there's an error connecting to the database.
db.on("error", function(err){
    console.error("connection error:", err)
});

// message to the console once the connection has been successfully opened.
db.once("open", function(){
    console.log("db connection successful");
});

// Variable to enable global error logging
const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING === 'true';

// Create the Express app
const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false })) // Parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // Parse application/json

// Setup morgan which gives us http request logging
app.use(morgan('dev'));

/* This CORS configuration is without a doubt the most essential part of the entire app for cross-browser consitency.
IE11 is the most difficult browser to synchronise with React codes - you have to use countless hours and babel plugins
to make your react app compatiable with IE11. In this app the plugin passport is used for every login and user creation.
This plugin is one of the most used and most popular plugins for user authentication among developers in real life projects.
Passport creates an auth cookie which works perfectly in all browers, except IE11. There is no info online to be found on this 
particular issue, other than including the right @babel plugins at the right places in the app. If you use passport as I do,
then your app will by default not work in IE11 when it comes to the login and user creation. After many days of testing I 
finally managed to find the correct header configuration for IE11 and all other browsers with React, which makes it possible 
to send cookies and use them both on the server and on the client side. Furthermore, IE11 blocks all cookies using cache,
which the Allow-Credentials: true, Cache-control: no-cache=set-cookie prevents. These two header configurations was the
ultimate solution for the biggest problem in this app. */

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Cache-control', 'no-cache=set-cookie');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

app.use(session({
  genid: function(req) {
    return uuid.v4(); // use UUIDs for session IDs
  },
  secret: process.env.cookieKey,
  secure: false,
  httpOnly: true,
  saveUninitialized: false,
  resave: false
}));

app.use(passport.initialize());
app.use(passport.session());

// If there is a user log it in a res.locals.user variable
app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

// Connect the routes
app.use('/users', userRoute);
app.use('/courses', courseRoute);

// Welcome message
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the JavaScript techdegree unit 10 REST-API'
  });
});

// send 404 if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found',
  });
});

// setup a global error handler
app.use((err, req, res, next) => {
  if (enableGlobalErrorLogging) {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  }

  const errorMessage = 
    err.status === 405 ? "Lacking information. Please use this format: {'username': 'your_email', 'password': 'your_password'} and try again." : 
    err.status === 406 ? "Wrong password! Try again..." : err.message;

  /* If we are here. Then we have recieved a response and 
  the header should have a status code 200 in order to read the correct 
  fail messages 
  */
  res.status(err.status || 500).json({
    status: err.status,
    message: errorMessage
  })

});

// set our port
app.set('port', process.env.PORT || 5000);

// start listening on our port
const server = app.listen(app.get('port'), () => {
  console.log('---------------------------------------------');
  console.log(`Express server is listening on port ${server.address().port}`);
  console.log('---------------------------------------------');
});
