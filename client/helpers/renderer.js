import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript"; // Serialize is used to prevent xss attacks
import { Helmet } from "react-helmet";
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import Routes from '../src/Routes';

/* Readme
This function renders the content we want to show on the screen first. 
The data gets stored and loaded and thrown into the HTML with content. 
When this has happend that it creates a string of HTML. First when everything
is in HTML format, then will the bundle.js file be loadet. */

export default (req, store, context) => {
    const sheet = new ServerStyleSheet()
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    /* This plugin renders all the styled-components which is great for a bigger development team.
    A styled component can be used to style a single component as you like. In this app I have used
    both styled components and a style.css public file */
    const style = sheet.getStyleTags()

    /* This instance returns an object of all the metatags we have loaded up to the Helmet lib. 
    Havent used metatags in the app yet. But it is good for SEO optimization later on. Just search
    for the helmet plugin to see how it works. */
    const helmet = Helmet.renderStatic();

    return `
        <!DOCTYPE html>
            <head>
            <meta charset="UTF-8">
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,500" rel="stylesheet" type="text/css">
            <link href="https://fonts.googleapis.com/css?family=Cousine" rel="stylesheet" type="text/css">          
            <link href="/css/style.css" rel="stylesheet" type="text/css">
            ${style}
            </head>
            <body>
                <div id="root">${content}</div>
                <script> 
                    window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script src="/bundle.js"></script>
            </body>
        </html> 
    `; 
}

