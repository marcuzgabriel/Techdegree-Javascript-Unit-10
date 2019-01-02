// Import the type for dispatching
import {
    USERTYPE
} from '../types'

export const userAuth = () => async (dispatch, getState, api) => {        
    
     // Make connection to the API proxy...
    api.get('/users/auth')
    .then((res) => {
        if (res.status === 200) {
             // Everything was successful...
            dispatch({
                type: USERTYPE.AUTH_SUCCESS,
                payload: res.data
            });
        } else {
            // Some unkown error has happend...
            dispatch({
                type: USERTYPE.AUTH_FAILURE,
                payload: false
            });
        }
    }).catch((err) => {
        if (err.response) {
            const data = err.response.data;
            if (data) {
                // An error has been caught...
                dispatch({
                    type: USERTYPE.AUTH_FAILURE,
                    payload: false
                });
            }
        }
    });
}