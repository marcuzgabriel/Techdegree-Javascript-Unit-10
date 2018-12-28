import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import CreateUserReducer from './CreateUserReducer';
import AuthUserReducer from './AuthUserReducer';
import LogoutUserReducer from "./LogoutUserReducer";

export default combineReducers({
    form: formReducer,
    create_user: CreateUserReducer,
    logout: LogoutUserReducer,
    auth: AuthUserReducer
});