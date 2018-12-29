import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import CreateUserReducer from './CreateUserReducer';
import AuthUserReducer from './AuthUserReducer';
import LogoutUserReducer from "./LogoutUserReducer";
import SigninUserReducer from "./SigninUserReducer";

export default combineReducers({
    form: formReducer,
    create_user: CreateUserReducer,
    logout: LogoutUserReducer,
    signin: SigninUserReducer,
    auth: AuthUserReducer
});