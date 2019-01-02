// Import the type for dispatching
import {
    COURSETYPE
} from '../types'

export const createCourse = (formData) => async (dispatch, getState, api) => {

    // Intialize the request as loading ...
    dispatch({
        type: COURSETYPE.CREATE_COURSE_REQUEST,
        payload: {
            data: {
                status: 205,
                message: "...Loading"
            }
        }
    })

    // Make connetion to the API proxy...
    api.post('/courses', {
        data: formData
    }).then((res) => {
        if (res.status === 201) {
            // Everything was successful...
            dispatch({
                type: COURSETYPE.CREATE_COURSE_SUCCESS,
                payload: res
            });
        } else {
            // Some unknown error has happend...
            dispatch({
                type: COURSETYPE.CREATE_COURSE_FAILURE,
                payload: res
            });
        }
    }).catch((err) => {
        if (err.response) {
            const res = err.response.data;
            if (res) {
                // An error has been caught...
                dispatch({
                    type: COURSETYPE.CREATE_COURSE_FAILURE,
                    payload: {
                        data: res
                    }
                });
            }
        }
    });
}