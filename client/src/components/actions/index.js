import {
    AUTH_USER,
    CREATE_USER  
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
                    type: CREATE_USER,
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


