export const userService = {
    login
};

const API = process.env.API_URL;

function login(formData) {
    const reqOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: formData
    }

    return fetch(`${API}/users/auth`, reqOptions)
    .then(handleResponse)
    .then(user => {
        // login successful if there's a jwt token in the response
        if (user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
        }

        return user;
    });

    // api.post('/users/login', {
    //     data: formData
    // }).then((res) => {
    //     if (res.status === 200) {

    //         // If there is a user, then we want to get the auth
    //         api.get('/users/auth')
    //         .then((res) => {
    //             if (res.status === 200) {
    //                 return res;
    //             }
    //         });
    //     }
    // });
}
   
