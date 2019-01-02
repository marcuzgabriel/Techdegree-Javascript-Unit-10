// Import the type for dispatching
import {
    USERTYPE
} from '../types';

export const createUser = ( formData ) => async (dispatch, getState, api) => {

    // Initialize the request as loading ...
    dispatch({
        type: USERTYPE.CREATE_USER_REQUEST,
        payload: {
            data: {
                status: 205, 
                message: "...Loading"
            }
        }
    });

    // Make connection to the API proxy...
    api.post('/users', {
        data: formData
    }).then(res => {
        if (res.status === 201) {

            dispatch({
                type: USERTYPE.CREATE_USER_SUCCESS,
                payload: res
            });

        } else {
            // Some unknown error has happend...
            dispatch({
                type: USERTYPE.CREATE_USER_FAILURE,
                payload: res
            });
           
        }
    }).catch((err) => {
        // If there is an error then find the response
        if (err.response) {
            const data = err.response.data;
            if (data) {
                // An error has been caught...
                dispatch({
                    type: USERTYPE.CREATE_USER_FAILURE,
                    payload: {
                        data: data
                    }
                });
            }
        }
    });
}