
/* Readme 
In order to achieve cross browser functionality with all browsers - also IE11. 
Then it is not recommended to use the async await approach. IE11 don't tolerate this
behaviour. Furthermore, it should be mentioned that redirecting directly in a 
component with (this.props.history.push("/path") will not work with IE11. All
redirections should be done in this action index file and the appraoch should be
with fetch and then. 
*/

import {
    AUTH_USER,
    CREATE_USER,
    LOGOUT_USER,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    CREATE_COURSE,
    GET_COURSES,
    GET_SINGLE_COURSE,
    DELETE_COURSE
} from './types';


export const loginUser = (formData) => async (dispatch, getState, api) => {

    // Initialize the request as loading 
    dispatch({
        type: LOGIN_REQUEST,
        payload: {
            data: {
                status: 205, 
                message: "...Loading"
            }
        }
    });

    // Make connection to the API proxy
    api.post('/users/login', {
        data: formData
    }).then((res) => {
        if (res.status === 200) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res
            });

        } else {
           // Some unkown error has happend...
        }
    }).catch((err) => {
        if (err.response) {
            const res = err.response.data;
            if (res) {
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: {
                        data: res
                    }
                });
            }
        }
    });
}

export const userAuth = () => async (dispatch, getState, api) => {        
    
    api.get('/users/auth')
    .then((res) => {
        if (res.status === 200) {
            dispatch({
                type: AUTH_USER,
                payload: res.data
            });
        } else {
            console.log("Something wierd happend");
        }
    }).catch((err) => {
        if (err.response) {
            const data = err.response.data;
            if (data) {
                dispatch({
                    type: AUTH_USER,
                    payload: data
                });
            }
        }
    });
}

export const createUser = ( formData ) => async (dispatch, getState, api) => {

    /* Reset the reducer so its empty - it might be the second time the user tries to 
    fill in the form because he used an email which is allready in the database. If this
    is the case then the reducer is not empty which will interupt the dispatch. */
    dispatch({
        type: CREATE_USER,
        payload: null
    });

    // Make connection to the API proxy
    api.post('/users', {
        data: formData
    }).then(res => {
        if (res.status === 201) {

            dispatch({
                type: CREATE_USER,
                payload: res
            });

            //Wait 2 seconds before redirecting in order to show the succes message on the client side
            setTimeout(() => {
                window.location.href = "/";
            }, 2000);
        } else {
           
        }
    }).catch((err) => {
        // If there is an error then find the response
        if (err.response) {
            const data = err.response.data;
            if (data) {
                dispatch({
                    type: CREATE_USER,
                    payload: data
                });
            }
        }
    });
}

export const logoutUser = () => async (dispatch, getState, api) => {

  
    /* Initialize with an empty reducer - the user might test your login system and
    login and logout several times. If you don't empty the reducer, then it might have old
    data stored.*/
    dispatch({
        type: LOGOUT_USER,
        payload: null
    });

    // Make connection to the API proxy
    api.get('/users/logout')
    .then(res => {
        if (res.status === 201) {

            dispatch({
                type: LOGOUT_USER,
                payload: res
            });

             // Delete the info in the auth_user reducer
             dispatch({
                type: AUTH_USER,
                payload: null
            });

            //Wait 2 seconds before redirecting in order to show the succes message on the client side
            setTimeout(() => {
                // Redirect to the signin page
                window.location.href = "/signin";
            }, 2000);

        } else {
            
        }
    }).catch((err) => {
        // If there is an error then find the response
        if (err.response) {
            const data = err.response.data;
            if (data) {
                dispatch({
                    type: LOGOUT_USER,
                    payload: data
                });
            }
        }
    });
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







