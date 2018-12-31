'use strict'

const express = require("express");
const courseRoute = express.Router();
const Courses = require("../../models/models").Courses;

/* For testing in Postman:
Creating a new course POST /api/courses

{ 
    "title" : "Learn How to Test Programs", 
    "description" : "In this course, you'll learn how to test programs.",
    "estimatedTime": "12 hours",
    "materialsNeeded": "Nothing"
}

*/


// Define a course by its id
courseRoute.param("cID", (req, res, next, id) => {
    Courses.findCourseById(id, (err, course) => {
        if (err) {
            err = new Error("Course is not found.");
            err.status = 404;
            return next(err);
        } else {
            req.course = course;
            res.status(200);
            return next();
        }
    });
});

//Returns a list of courses (including the user that owns each course)
courseRoute.get("/", (req, res, next) => {

    // Run static method 
    Courses.getAllCourses((err, data) => {
        if (err) return next(err);
        if (data) {
            res.status(200);
            res.json(data);
        }
    });
});

courseRoute.post("/", (req, res, next) => {

    // If the user is allready logged in then
    if (res.locals.user) {
        /* The user can only create a course if his logged in. If the user is not logged
        in then a error message will show. */
        const courseData = {
            user: res.locals.user._id,
            ...req.body.data
        };

        const newCourse = new Courses(courseData);
        newCourse.save((err, course) => {
            if(err) return next(err);
            res.status(201).json({
                status: 201,
                message: "Course created succesfully"
            });
        });
    } else {
        const err = new Error("You are not authenticated. Please login with your username and password by going to the POST route /api/users/login");
        err.status = 404;
        next(err);
    }
});

// Returns a the course (including the user that owns the course) for the provided course ID
courseRoute.get("/:cID", (req, res, next) => {
    
    // Run static method
    res.json(req.course);

});

// Updates a course and returns no content
courseRoute.put("/:cID",(req, res, next) => {

    // Get current user ID
    if (res.locals.user) {
        const currentUserId = res.locals.user._id;
        const courseUserId = req.course.user._id;

        // When comparing ids with MongoDB then they need toString
        if (currentUserId.toString() === courseUserId.toString()) {
        
            // Run static method
            Courses.findCourseById(req.course._id, (err, course) => {
                
                if (err) return next(err);
                course.update(req.body, (err, course) => {
                    if (err) return next(err);
                    res.status(204);
                    res.location("/");
                    res.json(course);
                });
            });
        } else {
        // You don't have the preveligous to edit this course
        const err = new Error("You don't have the preveliges to edit this course.");
        err.status = 403;
        next(err);
        }
    } else {
        // You are not logged in and can therefore not edit the post
        const err = new Error("You are not logged in and can therefore not edit the course.");
        err.status = 409;
        next(err);
    }
});

// Deletes a course and returns no content
courseRoute.delete("/:cID",(req, res, next) => {

     // Get current user ID
     if (res.locals.user) {
        const currentUserId = res.locals.user._id;
        const courseUserId = req.course.user._id;

        // When comparing ids with MongoDB then they need toString
        if (currentUserId.toString() === courseUserId.toString()) {
        
            // Run static method
            Courses.findCourseById(req.course._id, (err, course) => {
                
                if (err) return next(err);
                course.delete(req.body, (err, course) => {
                    if (err) return next(err);
                    res.status(204).end();
                });
            });
        } else {
        // You don't have the preveligous to edit this course
        const err = new Error("You don't have the preveliges to delete this course.");
        err.status = 403;
        next(err);
        }
    } else {
        // You are not logged in and can therefore not edit the post
        const err = new Error("You are not logged in and can therefore not edit the course.");
        err.status = 409;
        next(err);
    }
});

module.exports = courseRoute;