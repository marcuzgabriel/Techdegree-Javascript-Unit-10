// Import the type for dispatching
import {
    COURSETYPE
} from '../types';

export const deleteCourseById = ( id ) => async (dispatch, getState, api) => {

    /* Initialise with an empty request... */
    dispatch({
        type:  COURSETYPE.DELETE_COURSE_REQUEST,
        payload: {
            data: {
                status: 205,
                message: "...Loading"
            }
        }
    });

    // Make connection to the API proxy...
    api.delete(`/courses/${id}`)
    .then((res) => {
        if (res.status === 200) {
        
            // Everything was successful...
            dispatch({
                type: COURSETYPE.DELETE_COURSE_SUCCESS,
                payload: res.data
            })
        } else {
            // Some unknown error has occurred...
            dispatch({
                type: COURSETYPE.DELETE_COURSE_FAILURE,
                payload: res.data
            });
        }
    }).catch((err) => {
        if (err.response) {
            const data = err.response.data;
            if (data) {
                // An error has been caught...
                dispatch({
                    type: COURSETYPE.DELETE_COURSE_FAILURE,
                    payload: data
                });
            }
        }
    });
}

