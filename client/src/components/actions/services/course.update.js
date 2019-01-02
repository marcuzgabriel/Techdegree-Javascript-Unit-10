// Import the type for dispatching
import {
    COURSETYPE
} from '../types';

export const updateCourse = ( formData ) => async (dispatch, getState, api) => {

    /* Initialise with an empty request... */
    dispatch({
        type: COURSETYPE.UPDATE_COURSE_REQUEST,
        payload: {
            data: {
                status: 205,
                message: "...Loading"
            }
        }
    });

    // Make connection to the API proxy...
    api.put(`/courses/${formData._id}`, {
        data: formData
    }).then((res) => {
        if (res.status === 200) {
            // Everything was successful...
            dispatch({
                type: COURSETYPE.UPDATE_COURSE_SUCCESS,
                payload: res
            });
        } else {
            // Some unknown error has occurred...
            dispatch({
                type: COURSETYPE.UPDATE_COURSE_FAILURE,
                payload: res
            });
        }
    }).catch((err) => {
        if (err.response) {
            const data = err.response.data;
            if (data) {
                // An error has been caught...
                dispatch({
                    type: COURSETYPE.UPDATE_COURSE_FAILURE,
                    payload: data
                });
            }
        } 
    })
}