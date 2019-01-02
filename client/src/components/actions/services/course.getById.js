// Import the type for dispatching
import {
    COURSETYPE
} from '../types';

export const getCourseById = ( id ) => async (dispatch, getState, api) => {

    // Make connection to the API proxy...
    api.get(`/courses/${id}`)
    .then((res) => {
        if (res.status === 200) {
            // EVerything was successful...
            dispatch({
                type: COURSETYPE.GET_SINGLE_COURSE_SUCCESS,
                payload: res.data
            });
        } else {
            // Some unknnown error has occured...
            dispatch({
                type: COURSETYPE.GET_SINGLE_COURSE_FAILURE,
                payload: res.data
            });
        }
    }).catch((err) => {
        if (err.response) {
            const data = err.response.data;
            if (data) {
                // An error has been caught...
                dispatch({
                    type: COURSETYPE.GET_SINGLE_COURSE_FAILURE,
                    payload: data
                });
            }
        }
    });
}