import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "../actions/types";

export default function(state = null, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return action.payload
        case LOGIN_SUCCESS:
            return action.payload
        case LOGIN_FAILURE: 
            return action.payload
        default:
            return state;
    }
}