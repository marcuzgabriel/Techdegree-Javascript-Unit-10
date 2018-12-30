import {
    AUTH_USER,
    CREATE_USER,
    LOGOUT_USER,
    SIGNIN_USER,
    CREATE_COURSE,
    GET_COURSES,
    GET_SINGLE_COURSE,
    DELETE_COURSE
} from './types';

export const userAuth = () => async (dispatch, getState, api) => {
    try {
        
        const res = await api.get('/users/auth');

        // Get the result
        const data = await res.data
        
        dispatch({
            type: AUTH_USER,
            payload: data
        });

    } catch (error) {
        if (error.response) {
            const data = await error.response.data;
            if (data) {
                dispatch({
                    type: AUTH_USER,
                    payload: data
                });
            }
        }
    }
}

export const createUser = ( formData ) => async (dispatch, getState, api) => {

    /* When handling - one time events; in this case a user creation form - then it 
    is commonly good practice to reset the reducer first else you will end up with 
    two dispatches; one for the result and one for the error. */

    try {

        /* Reset the reducer so its empty - it might be the second time the user tries to 
        fill in the form because he used an email which is allready in the database. If this
        is the case then the reducer is not empty which will interupt the dispatch. */
        dispatch({
            type: CREATE_USER,
            payload: null
        });

        // Make connection to the API proxy
        const res = await api.post('/users', {
            data: formData
        });

        // Get the result
        const data = await res.data
      
        // Send back a response to the client
        if (data) {
            dispatch({
                type: CREATE_USER,
                payload: data
            });
        }
        
    } catch (error) {
        // If there is an error then find the response
        if (error.response) {
            const data = await error.response.data;
            if (data) {
                dispatch({
                    type: CREATE_USER,
                    payload: data
                });
            }
        }
    }
}

export const logoutUser = () => async (dispatch, getState, api) => {

    try {
        /* Initialize with an empty reducer - the user might test your login system and
        login and logout several times. If you don't empty the reducer, then it wont work properly.*/
        dispatch({
            type: LOGOUT_USER,
            payload: null
        });

        // Make connection to the API proxy
        const res = await api.get('/users/logout');

        // Get the result
        const data = await res.data
    
        // Send back a response to the client
        if (data) {
            dispatch({
                type: LOGOUT_USER,
                payload: data
            });
        }

        // Wait a couple of seconds before emptying the AUTH_USER
        setTimeout(() => {
            // Empty the auth reducer
            dispatch({
                type: AUTH_USER,
                payload: null
            });
        }, 2000);

    } catch (error) {
        // If there is an error then find the response
        if (error.response) {
            const data = await error.response.data;
            if (data) {
                dispatch({
                    type: LOGOUT_USER,
                    payload: data
                });
            }
        }
    }
}

export const signinUser = (formData) => async (dispatch, getState, api) => {

    try {
        /* Initialize with an empty reducer - the user might test your login system and
        login and logout several times. If you don't empty the reducer, then it wont work properly.*/
            dispatch({
            type: SIGNIN_USER,
            payload: null
        });

        // Make connection to the API proxy
        const res = await api.post('/users/login', {
            data: formData
        });

        // Get the result
        const data = await res.data
    
        // Send back a response to the client
        if (data) {
            dispatch({
                type: SIGNIN_USER,
                payload: data
            });
        }
       

    } catch (error) {
        // If there is an error then find the response
        if (error.response) {
            /* Initialize with an empty reducer - the user might test your login system and
            login and logout several times. If you don't empty the reducer, then it wont work properly.*/
            dispatch({
                type: SIGNIN_USER,
                payload: null
            });

            const data = await error.response.data;
            if (data) {
                dispatch({
                    type: SIGNIN_USER,
                    payload: data
                });
            }
        }
    }
}

export const createCourse = (formData) => async (dispatch, getState, api) => {

    try {

        /* Initialize with an empty reducer - the user might create a new course 
        right after the submit.*/
            dispatch({
            type: CREATE_COURSE,
            payload: null
        });

        // Make connection to the API proxy
        const res = await api.post('/courses', {
            data: formData
        });

        // Get the result
        const data = await res.data
    
        // Send back a response to the client
        if (data) {
            dispatch({
                type: CREATE_COURSE,
                payload: data
            });
        }
       
    } catch (error) {
        // If there is an error then find the response
        if (error.response) {
            /* Initialize with an empty reducer - the user might create several 
            courses. If you don't empty the reducer, then it wont work properly when
            it comes to the errors - it will show the previous error.*/
            dispatch({
                type: CREATE_COURSE,
                payload: null
            });

            const data = await error.response.data;
            if (data) {
                dispatch({
                    type: CREATE_COURSE,
                    payload: data
                });
            }
        }
    }
}

export const getCourses = () => async (dispatch, getState, api) => {

    try {
        /* Initialize with an empty reducer - the user might test your login system and
        login and logout several times. If you don't empty the reducer, then it wont work properly.*/
        dispatch({
            type: GET_COURSES,
            payload: null
        });

        // Make connection to the API proxy
        const res = await api.get('/courses');

        // Get the result
        const data = await res.data
    
        // Send back a response to the client
        if (data) {
            dispatch({
                type: GET_COURSES,
                payload: data
            });
        }

    } catch (error) {
        // If there is an error then find the response
        if (error.response) {
            const data = await error.response.data;
            if (data) {
                dispatch({
                    type: GET_COURSES,
                    payload: data
                });
            }
        }
    }
}

export const getCourseById = ( id ) => async (dispatch, getState, api) => {

    try {

        /* Initialize with an empty reducer - there might stored info from earlier*/
        dispatch({
            type: GET_SINGLE_COURSE,
            payload: null
        });

        // Make connection to the API proxy
        const res = await api.get(`/courses/${id}`);

        // Get the result
        const data = await res.data
    
        // Send back a response to the client
        if (data) {
            dispatch({
                type: GET_SINGLE_COURSE,
                payload: data
            });
        }

    } catch (error) {
        // If there is an error then find the response
        if (error.response) {
            const data = await error.response.data;
            if (data) {
                dispatch({
                    type: GET_SINGLE_COURSE,
                    payload: data
                });
            }
        }
    }
}

export const deleteCourseById = ( id ) => async (dispatch, getState, api) => {

    try {

        /* Initialize with an empty reducer - there might stored info from earlier*/
        dispatch({
            type: DELETE_COURSE,
            payload: null
        });

        // Make connection to the API proxy
        const res = await api.delete(`/courses/${id}`);

        // Delete or update requests dont return any data. So you have to make your own
      
        const data = {
            status: 204,
            message: "Course deleted."
        }
    
        // Send back a response to the client
        if (data) {
            dispatch({
                type: DELETE_COURSE,
                payload: data
            });
        }

    } catch (error) {
        // If there is an error then find the response
        if (error.response) {
            const data = await error.response.data;
            if (data) {
                dispatch({
                    type: DELETE_COURSE,
                    payload: data
                });
            }
        }
    }
}







