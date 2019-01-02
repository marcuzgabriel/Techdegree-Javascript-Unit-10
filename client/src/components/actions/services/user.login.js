
// Import the type for dispatching
import {
    USERTYPE
} from '../types';

export const userLogin = (formData) => async (dispatch, getState, api) => {

    // Initialize the request as loading ...
    dispatch({
        type: USERTYPE.LOGIN_REQUEST,
        payload: {
            data: {
                status: 205, 
                message: "...Loading"
            }
        }
    });

    // Make connection to the API proxy...
    api.post('/users/login', {
        data: formData
    }).then((res) => {
        if (res.status === 200) {
            // Everything was successful...
            dispatch({
                type: USERTYPE.LOGIN_SUCCESS,
                payload: res
            });

        } else {
           // Some unknown error has happend...
           dispatch({
               type: USERTYPE.LOGIN_FAILURE,
               payload: res
           });
        }
    }).catch((err) => {
        if (err.response) {
            const res = err.response.data;
            if (res) {
                // An error has been caught...
                dispatch({
                    type: USERTYPE.LOGIN_FAILURE,
                    payload: {
                        data: res
                    }
                });
            }
        }
    });
}