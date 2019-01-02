import { applyMiddleware, createStore } from "redux";
import thunk  from "redux-thunk";
import axios from "axios";
import reducers from "../src/components/reducers";

// This create store makes an axios instance to our API. 
export default (req) => {
 
    const axiosInstance = axios.create({
        baseURL: process.env.API_URL,
        headers: {cookie: req.get('cookie') || ''}
    });

    const store = createStore(
        reducers, 
        {}, 
        applyMiddleware(thunk.withExtraArgument(axiosInstance)));
    
    return store;
}