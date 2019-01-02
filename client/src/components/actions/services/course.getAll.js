// Import the type for dispatching
import {
    COURSETYPE
} from '../types';


export const getCourses = () => async (dispatch, getState, api) => {

    // Make connection to the API proxy...
    api.get('/courses')
    .then((res) => {
        if (res.status === 200) {
            // Everything was successful...
            dispatch({
                type: COURSETYPE.GET_COURSES_SUCCESS,
                payload: res.data
            });
        } else {
            // Some unknnown error has occured...
            dispatch({
                type: COURSETYPE.GET_COURSES_FAILURE,
                payload: res.data
            });
        }
    }).catch((err) => {
        if (err.response) {
            const data = err.response.data;
            if (data) {
                // An error has been caught...
                dispatch({
                    type: COURSETYPE.GET_COURSES_FAILURE,
                    payload: data
                });
            }
        }
    });
}