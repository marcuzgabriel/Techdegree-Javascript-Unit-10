import { userService } from '../_services/user.services';
import { alertActions } from './_alert.actions';

export const userActions = {
    login
};

function login(formData) {
   
    return dispatch => {
        dispatch(request({ username }));

        userService.login(formData)
        .then(
            user => {
                dispatch(success(user));
                window.location.href = "/"
            },
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
   };

   function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
   function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
   function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }

}