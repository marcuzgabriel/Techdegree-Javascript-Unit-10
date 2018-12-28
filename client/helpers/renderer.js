import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from "react-router-config";
//serialize is used to prevent xss attacks
import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import Routes from '../src/Routes';

/**
 * Denne funktion renderer det content vi vil have vist på skræmen først. 
 * Det der sker, er at data storen bliver loadet, og smidt med som content.
 * Herefter omformateres det til en string af html og sendes med i det html dokument der bliver sendt tilbage til brugeren først.
 * først herefter loades bundle.js filen, som er alt det react, vi gerne vil have på siden.
 */

export default (req, store, context) => {
    const sheet = new ServerStyleSheet()
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    const style = sheet.getStyleTags()

    //This instance returns an object of all the metatags we have loaded up to the Helmet lib.
    const helmet = Helmet.renderStatic();

    return `
        <!DOCTYPE html>
            <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,500" rel="stylesheet" type="text/css">
            <link href="https://fonts.googleapis.com/css?family=Cousine" rel="stylesheet" type="text/css">          
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

