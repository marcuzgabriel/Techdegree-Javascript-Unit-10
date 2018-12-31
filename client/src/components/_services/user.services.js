/* The user service encapsulates all backend api calls for performing 
CRUD operations on user data, as well as logging and out of the example application.
The service methods are exported via the userService object at the top of the file,
and the implementation of each method is located in the function declarations below. */

import { authHeader } from '../../../helpers/auth-header';

export const userService = {
    login
};

const login = (formData) => async (dispatch, getState, api) => {
    api.post('/users/login', {
        data: formData
    }).then((res) => {
        if (res.status === 200) {

            // If there is a user, then we want to get the auth
            api.get('/users/auth')
            .then((res) => {
                if (res.status === 200) {
                    localStorage.setItem('user', res);
                }
                return res;
            });
        }
    });
}