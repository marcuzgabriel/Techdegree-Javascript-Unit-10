import { GET_SINGLE_COURSE } from "../actions/types";

export default function(state = null, action) {
    switch (action.type) {
        case GET_SINGLE_COURSE:
            return action.payload;
        default:
            return state;
    }
}