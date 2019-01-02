// Import the type for dispatching
import {
    USERTYPE
} from '../types';

export const logoutUser = () => async (dispatch, getState, api) => {

    // Initialize the request as loading ...
    dispatch({
        type: USERTYPE.LOGOUT_REQUEST,
        payload: null
    });

     // Make connection to the API proxy...
    api.get('/users/logout')
    .then(res => {
        if (res.status === 201) {

            // Everything was successful...
            dispatch({
                type: USERTYPE.LOGOUT_SUCCESS,
                payload: res
            });

             // Make sure that there is no auth...
             dispatch({
                type: USERTYPE.AUTH_LOGOUT,
                payload: null
            });

        } else {
            // Some unkown error has happend...
            dispatch({
                type: USERTYPE.LOGOUT_FAILURE,
                res
            });
        }
    }).catch((err) => {
        // If there is an error then find the response
        if (err.response) {
            const data = err.response.data;
            if (data) {
                dispatch({
                    type: USERTYPE.LOGOUT_FAILURE,
                    payload: data
                });
            }
        }
    });
}
