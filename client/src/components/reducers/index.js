import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import createUserReducer from './CreateUserReducer';
import AuthUserReducer from './AuthUserReducer';

export default combineReducers({
    form: formReducer,
    create_user: createUserReducer,
    auth: AuthUserReducer
});