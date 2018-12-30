import App from "./App";
import Main from "./components/pages/main/Main";
import Signup from "./components/pages/subpages/Signup/Signup";
import Signin from "./components/pages/subpages/Signin/Signin";
import CreateCourse from "./components/pages/subpages/CreateCourse/CreateCourse";
import NotFound from "./components/pages/subpages/NotFound/NotFound";
import Forbidden from "./components/pages/subpages/Forbidden/Forbidden";
import ShowCourse from "./components/pages/subpages/ShowCourse/ShowCourse";
import Courses from "./components/pages/subpages/Courses/Courses";

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
                ...Signup,
                path: '/signup',
                exact: true,
            },
            {
                ...Signin,
                path: '/signin',
                exact: true,
            },
            {
                ...CreateCourse,
                path: '/courses/create',
                exact: true,
            },
            {
                ...ShowCourse,
                path: '/courses/:id'
            },
            {
                ...Forbidden,
                path: '/forbidden',
                exact: true,
            },
            {
                ...NotFound
            }
        ]
    }
];
