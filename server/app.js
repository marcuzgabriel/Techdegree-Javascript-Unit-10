'use strict';

// load modules
const cookieSession = require('cookie-session');
const express = require('express'); // Server
const morgan = require('morgan'); // Error handling
const userRoute = require('./src/routes/userRoute'); // Loading routes
const courseRoute = require('./src/routes/courseRoute'); // Course routes
var bodyParser = require('body-parser'); // Body parser
const mongoose = require("mongoose"); // Database
const path = require("path") // Enable joined paths
const cookieParser = require("cookie-parser") // Read cookies and create them
const exphbs = require("express-handlebars"); // Dunnoe if its neccesary yet....
const flash = require("connect-flash"); // Something used for storing messages...
const session = require("express-session"); // Session handleing
const passport = require("passport"); // Auth handling
const LocalStrategy = require("passport-local").Strategy;
const cors = require('cors');
require("@babel/polyfill");
require('dotenv').config();
 

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
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })) // Parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // Parse application/json

if (process.env.NODE_ENV === 'production') {
  app.get('*.js', function (req, res, next) {
      req.url = req.url + '.gz';
      res.set('Content-Encoding', 'gzip');
      next();
  });
}

// Setup morgan which gives us http request logging
app.use(morgan('dev'));

// Sessions
app.use(
  cookieSession({
      name: 'td10-login',
      maxAge: 30*24*60*60*1000, 
      keys: [process.env.cookieKey],
  })
)

// app.use(session({
//   secret: process.env.SECRET,
//   saveUninitialized: false,
//   resave: false
// }));

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

// This is the function you can use in a cross api
function ensureAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/api/users/login');
  }
}

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
