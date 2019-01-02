/* Readme
Passsport is 'case sensitive'. It only accept parameters "username", "password".
If you use other parameters then you have to define them yourself, which
is rather straight forward. The purpose of passport is to store the users information 
in a cookie when logging in. The cookie then remembers the req.locals.user variable,
which contains the users information. If the variable is not defined then it will 
return null. In this way the server knows wether the user is authenticated
or not. If changes in the file then you have to loggin again. */

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/models').Users;

// Passport signup
passport.use('local-signup', new LocalStrategy({
        usernameField: 'data[emailAddress]',
        passwordField: 'data[password]',
        passReqToCallback: true
    },
    (req, email, password, done) => {
        
        Users.getUserByUsername(email, (err, user) => {
           
            // If an user exists with such an email throw an error
            if (err) { return next(err); }
            if (user) return done(null, false);
            if (!user) {
                // If there is no user with such an email then continue
                const newUser = new Users(req.body.data);
                newUser.save((err, user) => {
                    if(err) return next(err);
                    
                    // Return it in the serializer
                    return done(null, user);

                });
            }
        });
}));

// Passport login
passport.use('local-login', new LocalStrategy({
        usernameField : 'data[email]',
        passwordField : 'data[password]'
    },
   
    (email, password, done) => {
  
    Users.getUserByUsername(email, (err, user) => {
      
        if(err) throw err;
        
        if (!user) {
            return done(null, false, {message: "There is no user which such email"});
    
        } else {
            Users.comparePasswords(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                return done(null, user);
            } else {
                return done(null, false, {message: "Invalid password"});
            }
            });
        }
    });
}));
  
  // Get the user information
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  // Spit out the user information
  passport.deserializeUser((id, done) => {
    Users.getUserById(id, (err, user) => {
      const currentUser = {
        /* Instead of just passing the value user to the done callback, then we
        define which user information we want to show - in this case we dont want 
        to show the user password */
        "_id": user._id,
        "firstName": user.firstName,
        "lastName": user.lastName,
        "emailAddress": user.emailAddress,
        "authenticated": true
      }
      done(err, currentUser);
    });
  });
  