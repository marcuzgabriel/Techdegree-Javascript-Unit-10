import { DELETE_COURSE } from "../actions/types";

export default function(state = null, action) {
    switch (action.type) {
        case DELETE_COURSE:
            return action.payload;
        default:
            return state;
    }
}