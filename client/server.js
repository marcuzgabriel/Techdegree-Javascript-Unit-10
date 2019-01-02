import express from "express"; // Server handling
import { matchRoutes } from "react-router-config"; // Routing
import proxy from "express-http-proxy"; // Create a proxy to the api
import Routes from "./src/Routes"; // Import the routes
import renderer from "./helpers/renderer"; // Render the app
import createStore from "./helpers/createStore"; // Creates a store to the API
import cookieParser from "cookie-parser"; // Parse cookies 

const app = express();
app.use(cookieParser());

///////////////////////////////
// CREATE A PROXY TO THE API //
///////////////////////////////

// Creates a proxy to our API
app.use('/api', 
    proxy(process.env.API_URL, {
        //this second argument in proxy is not nessesary anymore.
        proxyReqOptDecorator(opts){
            opts.headers['x-forwarded-host'] = process.env.FORWARD_HOST;
            return opts;
        }
    })
);


// Make a static connection to the public styles and more.
app.use(express.static('public'));

/* Readme: How to setup your server routing with the React routing. 
React uses paths and its own routing interigation. That is why we want to create an asynchronous connection between 
the express server routing and the react routing. If we don't, then we can't retrieve data from external API's or fetch data from
our reducers directely from our front-end to our back-end. Therefore, this app has two redux storages; one for the server side and one 
for the front-end. The helpers/createStore.js takes one or several cookies from our API and stores it in our reducer pr. default. Mainly
this storage is to check if a user has logged in with passport and if a cookie is created - we dont use reducers with our API. Our front-end
storage is located in our src/Client.js file. It initialize all of the reducers as a current state of our entire app. 

This setup is by far the toughest to understand when it comes to make a React app from scratch. (it is very unlogical). 
Your webpack needs to be setup perfectly in order for everything to be render correctly and be cross-browser friendly. 
The same goes for your route handling in src/Routes.js, and how the server side and front-end interpret them. */

// Connect Express routes with React routing, while storing any cookies from the API
app.get('*', (req, res) => {  

    // Create a store that stores a cookie from the API
    const store = createStore(req);

    // Get the current path the user is located it using express
    const page_path = req.path
    
    //Figure out if the express path matches the React path
    const promises = matchRoutes(Routes, req.path)

    /* This promise goes directely into our src/Routes.js file. As its an object we need to do the curly braces.
    The route name, is a name that we define ourselves and is used for the entire apps routing system. */
    .map(({ route }) => {
        
        /* The loadData we use for user authentications. If the use have logged in the data will 
        automatically be loaded */
        return route.loadData ? route.loadData(store, page_path) : null;

    })

    // If the routes are true and has the correct setup, then we can create a promise.
    .map( promise => {

        if (promise) {
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(reject);
            });
        }
    });
    
    /* Take the above promise (the matchRoutes promise) and render its content through a renderer method.
    The content is first known after it has run through our renderer method located under ./helpers/renderer.js. */
    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        // If everything goes well
        res.send(content);
    });
   
});

// Start a server
app.listen(3000, () => {
console.log("-----------------------------------")
console.log("Server is running on localhost 3000")
console.log("-----------------------------------")
}); 
