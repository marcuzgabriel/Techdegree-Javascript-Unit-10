/* Readme
This is our routing handling, which is super smooth and straight forward */

import App from "./App";
import Main from "./components/pages/main/Main";
import UserSignUp from "./components/pages/subpages/UserSignUp/UserSignUp";
import UserSignIn from "./components/pages/subpages/UserSignIn/UserSignIn";
import CreateCourse from "./components/pages/subpages/CreateCourse/CreateCourse";
import NotFound from "./components/pages/subpages/NotFound/NotFound";
import Forbidden from "./components/pages/subpages/Forbidden/Forbidden";
import CourseDetail  from "./components/pages/subpages/CourseDetail/CourseDetail";
import Courses from "./components/pages/subpages/Courses/Courses";
import UpdateCourseForm from "./components/pages/subpages/UpdateCourse/UpdateCourseForm";
import UnhandledError from "./components/pages/subpages/UnhandledError/UnhandledError";

export default [
    {
        ...App,
        routes: [
            {
                ...Main,
                path: '/',
                exact: true,
            },
            {
                ...Courses,
                path: '/courses',
                exact: true,
            },
            {
                ...UserSignUp,
                path: '/signup',
                exact: true,
            },
            {
                ...UserSignIn,
                path: '/signin',
                exact: true,
            },
            {
                ...CreateCourse,
                path: '/courses/create',
                exact: true,
            },
            {
                ...UpdateCourseForm,
                path: '/courses/:id/update',
                exact: true
            },
            {
                ...CourseDetail,
                path: '/courses/:id'
            },
            {
                ...Forbidden,
                path: '/forbidden',
                exact: true
            },
            {
                ...UnhandledError,
                path: '/error',
                exact: true
            },
            {
                ...NotFound
            }
        ]
    }
];
