import { LOGOUT_USER } from "../actions/types";

export default function(state = null, action) {
    switch (action.type) {
        case LOGOUT_USER:
            return action.payload;
        default:
            return state;
    }
}