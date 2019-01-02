import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import CreateUserReducer from './CreateUserReducer';
import AuthUserReducer from './AuthUserReducer';
import LogoutUserReducer from "./LogoutUserReducer";
import LoginUserReducer from "./LoginUserReducer";
import CreateCourseReducer from "./CreateCourseReducer";
import GetCoursesReducer from "./GetCoursesReducer";
import GetSingleCourseReducer from "./GetSingleCourseReducer";
import DeleteCourseReducer from "./DeleteCourseReducer";

export default combineReducers({
    form: formReducer,
    create_user: CreateUserReducer,
    logout: LogoutUserReducer,
    login: LoginUserReducer,
    auth: AuthUserReducer,
    create_course: CreateCourseReducer,
    courses: GetCoursesReducer,
    single_course: GetSingleCourseReducer,
    delete_course: DeleteCourseReducer
});