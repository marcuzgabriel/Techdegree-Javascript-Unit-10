import App from "./App";
import Main from "./components/pages/main/Main";
import Signup from "./components/pages/subpages/Signup/Signup";
import Signin from "./components/pages/subpages/Signin/Signin";
import CreateCourse from "./components/pages/subpages/CreateCourse/CreateCourse";
import NotFound from "./components/pages/subpages/NotFound/NotFound";


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
                ...Signup,
                path: '/sign-up',
                exact: true,
            },
            {
                ...Signin,
                path: '/sign-in',
                exact: true,
            },
            {
                ...CreateCourse,
                path: '/create-course',
                exact: true,
            },
            {
                ...NotFound
            }
            // {
            //     ...NotFoundPage
            // }
        ]
    }
];
