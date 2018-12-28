import "@babel/polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./src/Routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

///////////////////////////////
// CREATE A PROXY TO THE API //
///////////////////////////////

app.use('/api', proxy('http://localhost:5000', {
    // //this second argument in proxy is not nessesary in your own projects
    // proxyReqOptDecorator(opts){
    //     opts.headers['x-forwarded-host'] = 'localhost:3000';
    //     return opts;
    // }
}));

// Make a static connection to the public 

app.use(express.static('public'));

//CORS handler. pr. default CORS error will take action and deny any api calls. This handles CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });

/* How to setup your server routing with the React routing. 
React uses paths and its own routing interigation. That is why we want to create an asynchronous connection between 
the server routing and the react routing. If we don't, then we can't retrieve data from external API's or fetch data from
our reducers directely from our front-end to our back-end through and API. Therefore, this app has two redux storages; one for the server side and one 
for the front-end. The helpers/createStore.js takes one or several cookies from our API and stores it in our reducer pr. default. Mainly
this storage is to check if a user has logged in with passport. Our front-end storage is located in our src/Client.js file. It initialize
the current state of our entire app. 

This setup is by far the toughest to understand about a React app created from scratch. (it is very unlogical). 

You webpack needs to be setup perfect in order for everything ot be rendered correctly. The same goes for your routing handling in src/Routes.js 
and how the server side and front-end interperate them. */

// All routes
app.get('*', (req, res) => {  

    // Create a store that stores a cookie from the API
    const store = createStore(req);

    // Get the current path the user is at in the front end
    const page_path = req.path
    
    //Figure out if any of the front-end routes matches our backend. 
    const promises = matchRoutes(Routes, req.path)

    /* This promise goes directely into our src/Routes.js file. As its an object we need to do the curly braces.
    The route name, is a name that we define ourselves */
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
    
    /* Take the above promise (which is a route) and render its content through a renderer method.
    The content is first known after it has run through our renderer method located under ./helpers/renderer.js. */

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        // If the user is not validated
        if(context.url) {
            return res.redirect(302, context.url)
        }

        // If the user goes to a page which doesnt exist
        if(context.notFound){
            res.status(404);
        }

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
