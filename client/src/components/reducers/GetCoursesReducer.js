import { GET_COURSES } from "../actions/types";

export default function(state = null, action) {
    switch (action.type) {
        case GET_COURSES:
            return action.payload;
        default:
            return state;
    }
}