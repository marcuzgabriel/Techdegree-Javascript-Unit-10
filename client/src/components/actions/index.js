
/* Readme 
1) Purpose of this file?
Action creators is used to establish a connection to and from the api and dispatch the result with a reducer.
Reducers (react-redux) makes your entire app much more efficient. Instead of parsing all your data from the main component
down through thousands of other components, then you can enter a reducer prop from any component you like - you are not 
dependent of any component.

2) What does this file do?
This index file imports all of my service files (also known as my back-end configuration files where my API calls is made).
The service files are functions which can be called anywere, at anytime in any component. Some service files gets all of the
courses from the API where other gets a users authentication.

3) Guidelines for the coding approach?
In order to achieve cross browser functionality with all browsers - also IE11. 
Then it is not recommended to use the async await approach in the service files. IE11 don't
tolerate this behaviour; async is not the problem, it is the await. Therefore I have used axios and the
well known fetch approach when using the CRUD operators. Basicly this action (index.js). The services should in a 
big development environment have a strict coding structure  and approach which a development 
team can follow. My coding approach is to have the same coding structure when dispatching:
data { 
    status: "some_status",
    message: "some_message"
}
With this approach I can dispath the data correctly through status codes wether is true (200) or not found (404) or something else.
Furthermore a 3-step dispatch approach when handling data requests is the most recommended; A request, a success and a failure dispatch.
It is through a handleRequest function in the React component that we can handle the data correctly.
*/

import { createUser } from './services/user.create';
import { userLogin } from './services/user.login';
import { logoutUser } from './services/user.logout';
import { userAuth } from './services/user.auth';
import { createCourse } from './services/course.create';
import { getCourses } from './services/course.getAll';
import { getCourseById } from './services/course.getById';
import { deleteCourseById } from './services/course.delete';
import { updateCourse } from './services/course.update';

export {
    createUser,
    userLogin,
    logoutUser,
    userAuth,
    createCourse,
    getCourses,
    getCourseById,
    deleteCourseById,
    updateCourse
}









