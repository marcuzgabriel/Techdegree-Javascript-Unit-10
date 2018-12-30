'use strict';

/* MongoDB commands
Starting server: 
- C:\Projects\MongoDB\Server\4.0\bin\Mongod --dbpath="C:\Projects\Data\db" (use your local path)
- mongo "server_name"
- mongo "server_name"
- show collections
- show dbs 
- cls: clear console
- db.collectionNameHere.getIndexes(); // You will get very surpriced when seeing MongoDB insane way of structuring hidden indexes...
- db.collectionNameHere.dropIndex('firstName')
- db.collectionNameHere.getIndexes()
- db.user.remove({})
- db.users.find({})
- db.users.findOne({})
- db.users.remove({}) // Removing all users
- db.dropDatabase() // Remember to target your database from the beginning mongo "database". This function doesn't accept arguments.
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

/* Different validation possibilities (not recommended): 
- type: String, // Preehook
- required: 'Please enter your firstname', // Preehook
- trim: true, // Preehook
- lowercase: true // Prookhook
- You can also use validate: as a function: validate: [{ validator: v => validation(v), msg: 'Invalid email.' }] 

Be aware that having error handlers directely in the Schema will 
make mayor changes in the data structure. MongoDB will define the values for its
own understanding and interupt a straight forward logic. Writing
db.collectionNameHere.getIndexes() in your MongoDB will show you the 
data structure of Schema. For an example it will be impossible to have two
users with the same values and Mongoose will likely throw a duplicate E11000 error.
This is why I personally recommend to making validation as a pre-save hook. */

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    emailAddress: String,
    password: String
}, { dropIndexes: "UserSchema", index: "*" }); 

const CourseSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "Users"}, // This can be used to populate
    title: String,
    description: String,
    estimatedTime: String,
    materialsNeeded: String
}, { dropIndexes: "UserSchema", index: "*"});

/* in many cases MongoDB predefines its own data structure of indexes,
which gives you a strong data structure, but the structure can be ineffective.
If you for an example use validation directely in the Schema then you can't add 
two users without getting a duplicate error: E11000. If this happends then go to MongoDB console and 
write db.collectionname.getIndexes(). This method gives you an overview of the data structure.
If the structure is unfamiliar with alot of indexes, then you a problem and need to use the 
following code in the context.js file located in the seed folder:
    this.log(`Removing any annoying indexes...`);
    await collection.dropIndexes();
    You can also chose to drop the entire database and all its data to try again.
Predefined indexes and the error E11000 duplicate key error can only then be ignored. 
If you don't add the above code to the seed file you will get amazed on
how many indexes and wierd values MongoDB can create for you. And don't 
worry about the autoincrement; _id is still working properly.  More information: 
https://docs.mongodb.com/manual/reference/command/dropIndexes/ */

UserSchema.pre('save', async function (next, err) {
    
    // Validate firstname
    if (this.firstName === "" || this.firstName === null || this.firstName === undefined || this.firstName.length <= 0) {
        const err = new Error("Please fill in your firstname.");
        err.status = 400;
        next(err);
    }

    // Validate lastname 
    if (this.lastName === "" || this.lastName === null || this.lastName === undefined || this.lastName.length <= 0) {
        const err = new Error("Please fill in your lastName.");
        err.status = 400;
        next(err);
    }
    
    // Check that the email is in the right format with regex
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Check if email address is empty
    if (this.emailAddress === "" || this.emailAddress === null || this.emailAddress === undefined || this.emailAddress.length <= 0) {
        const err = new Error("Please fill in your email.");
        err.status = 400;
        next(err);
    }

    // Password length is to small
    if (this.password.length < 6) {
        const err = new Error("Password length should be more than 6 characthers.");
        err.status = 400;
        next(err);
    }

    // Check if password is empty
    if (this.password === "" || this.password === null || this.password === undefined || this.password.length <= 0) {
        const err = new Error("Please fill in your password.");
        err.status = 400;
        next(err);
    }
    
    // Hash the password
    if (this.password) {
        const hashedPassword = await bcrypt.hash(this.password, 10); // When you are in touch with the database directly then you need to use async and await - else nothing will happend..
        this.password = hashedPassword;
    }


    // Run the validateEmail function
    if (!validateEmail(this.emailAddress)) {
        const err = new Error("Email address is in the wrong format.");
        err.status = 400;
        next(err);
    }
        
    next() // If we are here, then continue
});

CourseSchema.pre('save', async function (next, err) {

    // If the course title is empty
    if (this.title === "" || this.title === null || this.title === undefined || this.title.length <= 0) {
        const err = new Error("Please fill in your title.");
        err.status = 400;
        next(err);
    }

    // If the description is empty
    if (this.description === "" || this.description === null || this.description === undefined || this.description.length <= 0) {
        const err = new Error("Please fill in your description.");
        err.status = 400;
        next(err);
    }

});

// Static methods

// Get username by email and throw back the result as a callback
UserSchema.statics.getUserByUsername = function(email, callback) {
    const query = {emailAddress: email};
    Users.findOne(query, callback);
}

// Find the user by id and throw back a callback
UserSchema.statics.getUserById = function(id, callback) {
    if (mongoose.Types.ObjectId.isValid(id)) {
        Users.findById(id, callback);
    } else {
        const err = new Error("There is no user with such id...");
        err.status = 404;
        throw err;
    }
}


// Compare the passwords and throw back a callback
UserSchema.statics.comparePasswords = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
}

// Get all courses and populate the user
CourseSchema.statics.getAllCourses = function (callback) {
    Courses.find({})
        .populate("user", "firstName lastName")
        .exec(function (err, courses) {
            if (err) throw err;
            callback(null, courses);
        });
}

// Get course by its ID
CourseSchema.statics.findCourseById = function (id, callback) {
    
    if (mongoose.Types.ObjectId.isValid(id)) {
        Courses.findById(id)
        .populate("user", "firstName lastName emailAddress")
        .exec(function (err, course) {
            if (err) throw err;
            callback(null, course);
        });
    } else {
        const err = new Error("No course matches that id...");
        err.status = 404;
        throw err;
    }  
}


const Users = mongoose.model("Users", UserSchema);
const Courses = mongoose.model("Courses", CourseSchema);

module.exports.Users = Users;
module.exports.Courses = Courses;



