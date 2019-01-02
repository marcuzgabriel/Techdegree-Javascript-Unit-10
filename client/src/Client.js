import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { renderRoutes } from "react-router-config";
import axios from 'axios';
import Routes from './Routes';
import reducers from './components/reducers';

// Makes an api instance, which is used in our actions
const axiosInstance = axios.create({
    baseURL: '/api'
});

// Makes a connection to all of reducers
const store = createStore(
    reducers, 
    window.INITIAL_STATE, 
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

// Hydate is method we use when the HTML is already created - which it is with our renderer method
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);